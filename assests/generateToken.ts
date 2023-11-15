import { JwtService } from "@nestjs/jwt"

export default async function getTokens(jwt: JwtService,userid: number, email:string){
    const [at, rt] = await Promise.all([
        jwt.signAsync(
            {
            sub: userid,
            email: email,
            },
            {
                secret: process.env.AT_SECRET,
                expiresIn: 60 * 10  // Expires in 15 mins
            }
        ),

        jwt.signAsync(
            {
            sub: userid,
            email: email,
            },
            {   
                secret: process.env.RT_SECRET,
                expiresIn: 60 * 60 * 24 * 10
            }
        )
    ])

    return{
         at,
         rt
    }
}