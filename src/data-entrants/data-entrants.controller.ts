import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Res, UseGuards } from '@nestjs/common';
import { DataEntrantsService } from './data-entrants.service';
import { CreateDataEntrantDto } from './dto/create-data-entrant.dto';
import { UpdateDataEntrantDto } from './dto/update-data-entrant.dto';
import { Public } from 'src/common/decorators/public.decorators';
import { Tokens } from '../Auth/types/token.types';
import { AuthService } from 'src/Auth/auth.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDTo } from 'src/Auth/dtos/sign-in.dto';
import { Response } from 'express';
import { GetCurrentUserID } from 'src/common/decorators/get-current-user.id.decorator';
import { AtGuard, RtGuard } from 'src/common/guards';
import { GetCurrentUser } from 'src/common/decorators/get-current-user.decorator';
import { changePassDto } from 'src/admins/dto/change-pass.dto';

@Controller('data-entrants')
export class DataEntrantsController {
  constructor(
    private readonly dataEntrantsService: DataEntrantsService,
    private authService: AuthService,     
    private jwtService: JwtService       
    ) {}





  @Public(false)
  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body: CreateDataEntrantDto): Promise<Tokens> {
    return this.authService.signupEntrant(body);
  }




    // Public Route
    @Public(true)
    @Post('/signin')
    @HttpCode(HttpStatus.OK)
    async signin(@Body() body: SignInDTo, @Res() res: Response) {
      try {
        const tokens = await this.authService.signinEntrant(body);
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






    @Post('/logout')
    @HttpCode(HttpStatus.OK)
    logout(@GetCurrentUserID() userid: number) {
      return this.authService.logoutEntrant(userid);
    } 





    @Public(true)
    @UseGuards(RtGuard)
    @Post('/refresh')
    @HttpCode(HttpStatus.OK)
    async refresh(
    @GetCurrentUserID() userid: number,
    @GetCurrentUser('refreshToken') refreshToken: string,
    @Res() res: Response) {

      try{
            const tokens =  await this.authService.refreshEntrant(userid, refreshToken)
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
      return await this.dataEntrantsService.findOne(userid)
      
    }






  @Get()
  findAll() {
    return this.dataEntrantsService.findAll();
  }







  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dataEntrantsService.findOne(+id);
  }







  @Patch('/self')
  async updateSelf(@Body() body: UpdateDataEntrantDto,@GetCurrentUserID() userid: number) {
    return await this.authService.updateSelfdataEntrant(body, userid);
  }





  @Patch('/changePass')
  changePassword(@Body() body: changePassDto, @GetCurrentUserID() userid: number) {
    return this.authService.changePassEntarant(body, userid);
  }




  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDataEntrantDto: UpdateDataEntrantDto) {
    return this.dataEntrantsService.update(+id, updateDataEntrantDto);
  }







  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dataEntrantsService.remove(+id);
  }








}