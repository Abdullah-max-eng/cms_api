import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Passport } from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import * as dotenv from 'dotenv';




@Injectable()
export class ATStrategy extends PassportStrategy(Strategy,'jwt'){
    constructor(){
    dotenv.config();
       super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.AT_SECRET
       }) 
    }
    validate(payload:any){
        return payload
    }


}