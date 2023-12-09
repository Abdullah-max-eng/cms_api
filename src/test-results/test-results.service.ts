import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateTestResultDto } from './dto/create-test-result.dto';
import { UpdateTestResultDto } from './dto/update-test-result.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TestResult } from './entities/test-result.entity';

@Injectable()
export class TestResultsService {

      constructor(@InjectModel(TestResult) private TestResultsModel: typeof TestResult){}




        async  create(body: CreateTestResultDto) {

       
          const TestResult = body.testResult
          try {
            const created = await this.TestResultsModel.create({
              testResult: TestResult,
              TestRecordID: body.TestRecordID
          
            });
            return created;
          } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
              throw new ConflictException('Already Exist!');
            }
            throw new InternalServerErrorException('Failed to create');
          }
        }






        async  findAll() {
          try {
            const records = await this.TestResultsModel.findAll();
            return records;
          } catch (error) {
            throw new InternalServerErrorException('Failed to fetch  Record');
          }        
        
        }







        async   findOne(id: number) {
          const aRecord = await this.TestResultsModel.findOne({where:{id:id}});
          if (!aRecord) {
            throw new NotFoundException(`Recrod with ID ${id} not found`);
          }else{
            return aRecord
        }        
      
        }






        async    update(id: number, body: UpdateTestResultDto) {
          const getRecord = await this.findOne(id)
          const updatedOne = await getRecord.update({
            testResult: body.testResult,
            TestRecordID: body.TestRecordID

          })
        return {status: true, updatedOne} }
  
  





       async  remove(id: number) {
        try {
          const deletedRows = await this.TestResultsModel.destroy({ where: { id } });
          if (deletedRows === 0) {
            throw new NotFoundException(`Record with ID ${id} not found`);
          }
        } catch (error) {
          throw new InternalServerErrorException('Failed to delete the record');
        }       
      
       }


   





}
