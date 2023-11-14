import { ExecutionContext, createParamDecorator } from "@nestjs/common"

export const  GetCurrentUser = createParamDecorator(
    (data: string, context: ExecutionContext) =>{
        const request = context.switchToHttp().getRequest()
        if(!data){
            return request.user;}
        console.log("Refresh cookies ", request.user[data])
        return request.user[data]
    }, 
);   