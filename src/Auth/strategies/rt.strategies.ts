import { PassportStrategy } from "@nestjs/passport";
import { Passport } from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import {Request} from 'express'
import { ForbiddenException, Injectable } from "@nestjs/common";
import * as dotenv from 'dotenv';



@Injectable()
export class RtStrategy extends PassportStrategy(Strategy,'jwt-refresh'){
    constructor(){
     dotenv.config();
    
       super({
        
            jwtFromRequest: (req:Request) => req.cookies['refreshToken'],
            secretOrKey: process.env.RT_SECRET,
            passReqToCallback: true,

       }) 
    }





    
    validate(req: Request, payload:any){
        // const refreshToken = req.get('authorization').replace('Bearer','').trim()
        const refreshToken = req.cookies['refreshToken'];
        if(!refreshToken){
            throw new ForbiddenException("Forbidden!")
        }
        return{
            ...payload,
            refreshToken
        }
    }


}