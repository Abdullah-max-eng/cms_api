import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateTestRecordDto } from './dto/create-test-record.dto';
import { UpdateTestRecordDto } from './dto/update-test-record.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TestRecord } from './entities/test-record.entity';

@Injectable()
export class TestRecordsService {

  constructor(@InjectModel(TestRecord) private TestRecordsModel: typeof TestRecord){}











  async create(body: CreateTestRecordDto) {

    const ReproductivePatientID = body.ReproductivePatientID;
    const publicPatiendID = body.PublicPatientID;
    const ChildrenPatientID = body.ChildrenPatientID;

    try {
      const createMdeciationRecord = await this.TestRecordsModel.create({
        testName: body.testName,
        ReproductivePatientID: ReproductivePatientID,
        PublicPatientID: publicPatiendID,
        ChildrenPatientID: ChildrenPatientID

      });
      return createMdeciationRecord;
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new ConflictException('Record already exists');
      }
      throw new InternalServerErrorException('Failed to create record');
    }


    
  }




  async findAll() {
    try {
      const records = await this.TestRecordsModel.scope('withResult').findAll();
      return records;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch Test Record');
    }
  }





  async findOne(id: number) {
    const aRecord = await this.TestRecordsModel.scope('withResult').findOne({where:{id:id}});
    if (!aRecord) {
      throw new NotFoundException(`Test Recrod with ID ${id} not found`);
    }else{
      return aRecord
    }
  }




  async update(id: number, body: UpdateTestRecordDto) {
        const getRecord = await this.findOne(id)
        const updatedOne = await getRecord.update({
          ReproductivePatientID: body.ReproductivePatientID,
          publicPatiendID: body.PublicPatientID ,
          ChildrenPatientID: body.ChildrenPatientID,
          testName: body.testName,
          

        })
      return {status: true, updatedOne}
  }






  async  remove(id: number) {
      try {
          const deletedRows = await this.TestRecordsModel.destroy({ where: { id } });
          if (deletedRows === 0) {
            throw new NotFoundException(`Record with ID ${id} not found`);
          }
        } catch (error) {
          throw new InternalServerErrorException('Failed to delete the record');
        }  
      }





   async removeAllBasedOnPPID(PPid: number) {
        try {
          
          const allRecords = await this.TestRecordsModel.scope({ method: ['forPublicPatient', PPid] }).findAll();
          // Destroy (delete) each retrieved record
          for (const record of allRecords) {
            await record.destroy();
          }

          // Optionally, you can also use the bulkDestroy method to delete all records in a single query:
          // await this.feeModel.destroy({ where: { PublicPatientID: PPid } });

          // Return a success message or any necessary information
          return { status: true };
        } catch (error) {
          // Handle errors, log them, or throw a specific exception
          throw new InternalServerErrorException('Failed to delete the records');
        }
  }










  async removeTestResultOfTestRecord(testRecordID: number) {
    try {
      // Find the TestRecord with associated TestResult using the scope
      const testRecord = await this.TestRecordsModel.scope([{ method: ['FindByID', testRecordID] }, 'withResult']).findOne();
  
      if (!testRecord) {
        throw new NotFoundException(`TestRecord with ID ${testRecordID} not found.`);
      }
  
      const testResult = testRecord.TestResult;
  
      if (testResult) {
        await testResult.destroy();
  
        // If you also want to return the deleted TestResult, you can do so
        return { testResult };
      } else {
        // Return an indication that there was no associated TestResult
        return { message: 'No associated TestResult found for the specified TestRecord.' };
      }
    } catch (error) {
      console.error('Error removing test result:', error);
      throw new InternalServerErrorException('Failed to delete the test result');
    }
  }
  
  




}
