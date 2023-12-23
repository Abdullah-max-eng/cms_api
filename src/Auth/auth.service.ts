import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt/dist";
import { Tokens } from "./types";
import * as dotenv from 'dotenv';
import { AdminsService } from "src/admins/admins.service";
import { DataEntrantsService } from "src/data-entrants/data-entrants.service";
import { CreateAdminDto } from "src/admins/dto/create-admin.dto";
import { SignInDTo } from "./dtos/sign-in.dto";
import { UpdateAdminDto } from "src/admins/dto/update-admin.dto";
import { changePassDto } from "src/admins/dto/change-pass.dto";
import { CreateDataEntrantDto } from "src/data-entrants/dto/create-data-entrant.dto";
import getTokens from "assests/generateToken";
@Injectable()
export class AuthService{



 
    constructor(
         private adminServices: AdminsService,
         private dataEntrantService: DataEntrantsService,
         private jwtService: JwtService){
        dotenv.config();
    }





    // ****************Services for Admins*******************

    async signupAdmin(body: CreateAdminDto ): Promise<Tokens>{
        const admin = await this.adminServices.findByEmail(body.email)
        if(admin){
            throw new BadRequestException("Email in Use")
        }
        //Hash the password
        const hashedpass = await this.hashData(body.password);
        const createduser = await this.adminServices.create({
            username : body.username,
            password: hashedpass,
            email:body.email
        })
        const tokens = await getTokens(this.jwtService,createduser.newUser.id, createduser.newUser.email )
        await this.updateRtHashAdmin(createduser.newUser.id, tokens.rt)
        return {access_token: tokens.at, refresh_token:tokens.rt}

    }


    
    async signinAdmin(body: SignInDTo): Promise<Tokens> {
        const user = await this.adminServices.findByEmail(body.email)
       
        if(!user){
            throw new ForbiddenException("Access Denied! ")
        }
        const matched = await this.compareHashes(body.password,user.password) //(password given by user, hashed pass saved in db)
        
        if(matched){
            const tokens = await getTokens(this.jwtService,user.id, user.email )
            await this.updateRtHashAdmin(user.id, tokens.rt)
            return {access_token: tokens.at, refresh_token:tokens.rt}
       
        }else{
            throw new ForbiddenException("Access Denied! ")
        }
         
    }

       
    async logoutAdmin(userid: number) {
        await this.adminServices.update(userid,{
            Hashedrt: null
        });
      }


      
    async refreshAdmin(userId: number, rt: string) {
        console.log(userId,rt)
        const user = await this.adminServices.getOne(userId);
        if (!user || !user.Hashedrt) {
          throw new NotFoundException("User not found!");
        }
    
        const rtMatches = await this.compareHashes(rt, user.Hashedrt);
        if (!rtMatches) {
          throw new ForbiddenException("Access Denied!");
        }
    
        const tokens = await getTokens(this.jwtService,user.id, user.email);
        await this.updateRtHashAdmin(user.id, tokens.rt);
        return tokens;
      }




      
    async updateSelfAdmin(body: UpdateAdminDto , currentUserID: number) {
        // console.log("----------------------> BODY", body);
        // console.log("++++++++++++++++++++=+> CURRENT ID", currentUserID);
        await this.adminServices.update(currentUserID,{
            username: body.username,
            email: body.email,
            Hashedrt: null
        })
      
        return {message: "Admin Updated"};
      }




    async changePassAdmin(body: changePassDto, currentUserID: number) {
        const user = await this.adminServices.getOne(currentUserID);
        if (user) {
          const currentHashedPassInDB = user.dataValues.password;
          const match = await this.compareHashes(body.currentPassword, currentHashedPassInDB);
      
          if (match) {
            const newPasswordHash = await this.hashData(body.newPassword);
      
            await this.adminServices.updatePass(currentUserID, {
              newPassword: newPasswordHash,
              currentPassword: currentHashedPassInDB,
            });
      
            return { message: "Password Updated" };
          } else {
            return { message: false };
          }
        } else {
          throw new NotFoundException("User doesn't exist!");
        }
       }




    async updateRtHashAdmin(id: number, rt: string){
        const hashedRT = await this.hashData(rt);
        await this.adminServices.update(id,{
            Hashedrt: hashedRT
        })

     
        }
//   **************************************************************
    















// ****************Services for Data Entrant*******************



    async signupEntrant(body: CreateDataEntrantDto ): Promise<Tokens>{
        const admin = await this.dataEntrantService.findByEmail(body.email)
        if(admin){
            throw new BadRequestException("Email in Use")
        }
        //Hash the password
        const hashedpass = await this.hashData(body.password);
        const createduser = await this.dataEntrantService.create({
            username : body.username,
            password: hashedpass,
            email:body.email,
            clinicId: body.clinicId
        })
        const tokens = await getTokens(this.jwtService,createduser.newDataEntrant.id, createduser.newDataEntrant.email )
        await this.updateRtHashEntrant(createduser.newDataEntrant.id, tokens.rt)
        return {access_token: tokens.at, refresh_token:tokens.rt}

    }


    
    async signinEntrant(body: SignInDTo): Promise<Tokens> {
        const user = await this.dataEntrantService.findByEmail(body.email)
       
        if(!user){
            throw new ForbiddenException("Access Denied! ")
        }
        const matched = await this.compareHashes(body.password,user.password) //(password given by user, hashed pass saved in db)
        
        if(matched){
            const tokens = await getTokens(this.jwtService,user.id, user.email )
            await this.updateRtHashEntrant(user.id, tokens.rt)
            return {access_token: tokens.at, refresh_token:tokens.rt}
       
        }else{
            throw new ForbiddenException("Access Denied! ")
        }
         
    }




       
    async logoutEntrant(userid: number) {
        await this.dataEntrantService.update(userid,{
            Hashedrt: null
        });
      }


      



    async refreshEntrant(userId: number, rt: string) {
        const user = await this.dataEntrantService.getOne(userId);
        if (!user || !user.Hashedrt) {
          throw new NotFoundException("User not found!");
        }
    
        const rtMatches = await this.compareHashes(rt, user.Hashedrt);
        if (!rtMatches) {
          throw new ForbiddenException("Access Denied!");
        }
    
        const tokens = await getTokens(this.jwtService,user.id, user.email);
        await this.updateRtHashEntrant(user.id, tokens.rt);
        return tokens;
      }




      
    async updateSelfdataEntrant(body: UpdateAdminDto , currentUserID: number) {
        await this.dataEntrantService.update(currentUserID,{
            username: body.username,
            email: body.email,
            Hashedrt: null
        })
      
        return {message: "Data Entrant Updated"};
      }




    async changePassEntarant(body: changePassDto, currentUserID: number) {
        
      
      const user = await this.dataEntrantService.getOne(currentUserID);
 
      if (user) {
          const currentHashedPassInDB = user.dataValues.password;
          const match = await this.compareHashes(body.currentPassword, currentHashedPassInDB);
      
          if (match) {
            const newPasswordHash = await this.hashData(body.newPassword);
      
            await this.dataEntrantService.updatePass(currentUserID, {
              newPassword: newPasswordHash,
              currentPassword: currentHashedPassInDB,
            });
      
            return { message: "Password Updated" };
          } else {
            return { message: false };
          }
        } else {
          throw new NotFoundException("User doesn't exist!");
        }
       }






    async updateRtHashEntrant(id: number, rt: string){
                const hashedRT = await this.hashData(rt);
                await this.dataEntrantService.update(id,{
                    Hashedrt: hashedRT
                })
        }

    // ******************************************************


















// ****************************General Function to be used by both admins and data entrants *****************************

    // Hashing Function
    async hashData(input: string) {
        const salt = bcrypt.genSaltSync();
        return await bcrypt.hashSync(input, salt);
    }



    async compareHashes(rawpass: string, hash: string) {
        return await bcrypt.compare(rawpass,hash)
    }




















}