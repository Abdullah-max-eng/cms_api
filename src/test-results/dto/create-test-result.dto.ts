import { IsNumber, IsObject, IsString } from "class-validator";

export class CreateTestResultDto {

    @IsString()
    testResult

    @IsNumber()
    TestRecordID


}
