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
    const ReproductivePatientID = body.ReproductivePatientID;
    const collectedFee = body.collectedFee;
    const publicPatiendID = body.PublicPatientID;

    try {
      const created = await this.FeeModel.create({
        PayableFee: PayableFee,
        collectedFee: collectedFee,
        PaymentDate: PaymentDate,
        ReproductivePatientID: ReproductivePatientID,
        PublicPatientID: publicPatiendID
    
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
      PublicPatientID: body.PublicPatientID
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





}

