import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateFeeDto } from './dto/create-fee.dto';
import { UpdateFeeDto } from './dto/update-fee.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Fee } from './entities/fee.entity';

@Injectable()
export class FeesService {

  constructor(@InjectModel(Fee) private FeeModel: typeof Fee){}


  async create(body: CreateFeeDto) {
    const PayableFee = body.PayableFee;
    const PaymentDate = body.PaymentDate;
    const collectedFee = body.collectedFee;
    
    const ReproductivePatientID = body.ReproductivePatientID;
    const publicPatiendID = body.PublicPatientID;
    const ChildPatientID= body.ChildrenPatientID;

    try {
      const created = await this.FeeModel.create({
        PayableFee: PayableFee,
        collectedFee: collectedFee,
        PaymentDate: PaymentDate,


        ReproductivePatientID: ReproductivePatientID,
        PublicPatientID: publicPatiendID,
        ChildrenPatientID: ChildPatientID
    
      });
      return created;
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new ConflictException('Already Exist!');
      }
      throw new InternalServerErrorException('Failed to create');
    }   }





  async findAll() {
    try {
      const records = await this.FeeModel.findAll();
      return records;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch  Record');
    }  }




  async findOne(id: number) {
    const aRecord = await this.FeeModel.findOne({where:{id:id}});
    if (!aRecord) {
      throw new NotFoundException(`Recrod with ID ${id} not found`);
    }else{
      return aRecord
  }  
  }





  async update(id: number, body: UpdateFeeDto) {
    const getRecord = await this.findOne(id)
    const updatedOne = await getRecord.update({
      PayableFee: body.PayableFee,
      collectedFee: body.collectedFee,
      PaymentDate: body.PaymentDate,


      
      ReproductivePatientID: body.ReproductivePatientID,
      PublicPatientID: body.PublicPatientID,
      ChildrenPatientID: body.ChildrenPatientID,
    })
  return {status: true, updatedOne}  
  }





  async remove(id: number) {
    try {
      const deletedRows = await this.FeeModel.destroy({ where: { id } });
      if (deletedRows === 0) {
        throw new NotFoundException(`Record with ID ${id} not found`);
      }
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete the record');
    }  
  }



  



  async removeAllBasedOnPPID(PPid: number) {
        try {
          
          const allRecords = await this.FeeModel.scope({ method: ['forPublicPatient', PPid] }).findAll();
          console.log(allRecords)
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




}

