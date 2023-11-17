import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Res, UseGuards } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { AuthService } from 'src/Auth/auth.service';
import { Public } from 'src/common/decorators/public.decorators';
import { Tokens } from 'src/Auth/types';
import { SignInDTo } from 'src/Auth/dtos/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { GetCurrentUserID } from 'src/common/decorators/get-current-user.id.decorator';
import { AtGuard, RtGuard } from 'src/common/guards';
import { GetCurrentUser } from 'src/common/decorators/get-current-user.decorator';
import { changePassDto } from './dto/change-pass.dto';





@Controller('admins')
export class AdminsController {
 
 
 
  constructor(
     private readonly adminsService: AdminsService,
     private authService: AuthService,
     private jwtService: JwtService) {}



        @Public(true)
        @Post('/signup')
        @HttpCode(HttpStatus.CREATED)
        create(@Body() body: CreateAdminDto): Promise<Tokens> {
          return this.authService.signupAdmin(body);
        }




  // Public Route
        @Public(true)
        @Post('/signin')
        @HttpCode(HttpStatus.OK)
        async signin(@Body() body: SignInDTo, @Res() res: Response) {
          try {
            const tokens = await this.authService.signinAdmin(body);
            const decodedToken = this.jwtService.decode(tokens.access_token) as { [key: string]: any };
            const expirationTime = decodedToken.exp;
            const expiresAtDate = new Date(expirationTime * 1000); // Convert to milliseconds

            res.cookie('refreshToken', tokens.refresh_token, {
              httpOnly: true,
              expires: expiresAtDate,
            });

            res.send({
              access_token: tokens.access_token,
              expires_at: expiresAtDate,
            });
          } catch (error) {
            // console.error('Error signing in:', error);
            // Check if the error message indicates invalid credentials or access denied
            let errorMessage = 'Invalid credentials';
            if (error === 'Access Denied!') {
              errorMessage = 'Access denied';
            }
            res.status(403).send({
              error: errorMessage,
            });
          }
        }


    // Public Route

        @Post('/logout')
        @HttpCode(HttpStatus.OK)
        logout(@GetCurrentUserID() userid: number) {
          return this.authService.logoutAdmin(userid);
        } 







        // Public Route
      
        @Public(true)
        @UseGuards(RtGuard)
        @Post('/refresh')
        @HttpCode(HttpStatus.OK)
        async refresh(
        @GetCurrentUserID() userid: number,
        @GetCurrentUser('refreshToken') refreshToken: string,
        @Res() res: Response) {
    
          try{
                const tokens =  await this.authService.refreshAdmin(userid, refreshToken)
                const decodedToken = this.jwtService.decode(tokens.at) as { [key: string]: any };
                const expirationTime = decodedToken.exp;
                const expiresAtDate = new Date(expirationTime * 1000); // Convert to milliseconds
                res.cookie('refreshToken', tokens.rt, {
                    httpOnly: true,
                    expires: expiresAtDate,
                    sameSite: 'none' 
                  });
    
                  res.send(
                    {
                      access_token: tokens.at,
                      expires_at: expiresAtDate,
                    })
              }catch(error){
                let errorMessage = "Access Denied!"
                if (error === 'Access Denied!') {
                  errorMessage = 'Access denied';
                }
                res.status(403).send({
                  error: errorMessage,
                });
    
              }
        }
    
    




        @Public(false)
        @UseGuards(AtGuard)
        @Get('/userDataId')
        @HttpCode(HttpStatus.OK)
        async getCurrentUserBasedOnID(@GetCurrentUserID() userid: number){
          return await this.adminsService.findOne(userid)
          
        }





        @Get()
        findAll() {
          return this.adminsService.findAll();
        }







        @Get(':id')
        findOne(@Param('id') id: string) {
          return this.adminsService.findOne(+id);
        }






        @Patch('/self')
        async updateSelf(@Body() body: UpdateAdminDto,@GetCurrentUserID() userid: number) {
          return await this.authService.updateSelfAdmin(body, userid);
        }





        
      @Patch('/changePass')
      changePassword(@Body() body: changePassDto, @GetCurrentUserID() userid: number) {
        return this.authService.changePassAdmin(body, userid);
      }



      @Patch(':id')
      update(@Param('id') id: string, @Body() updateUserDto: UpdateAdminDto) {
        return this.adminsService.update(+id, updateUserDto);
      }
    

      
      @Delete(':id')
      remove(@Param('id') id: string) {
        return this.adminsService.remove(+id);
      }
}
