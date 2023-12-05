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
      const records = await this.TestRecordsModel.findAll();
      return records;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch Medicaiton Record');
    }
  }





  async findOne(id: number) {
    const aRecord = await this.TestRecordsModel.findOne({where:{id:id}});
    if (!aRecord) {
      throw new NotFoundException(`Medication Recrod with ID ${id} not found`);
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




}
