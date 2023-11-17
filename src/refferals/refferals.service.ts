import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateRefferalDto } from './dto/create-refferal.dto';
import { UpdateRefferalDto } from './dto/update-refferal.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Refferal } from './entities/refferal.entity';

@Injectable()
export class RefferalsService {
  constructor(@InjectModel(Refferal) private RefferalModel: typeof Refferal){}


  async create(body: CreateRefferalDto) {
    const Refferal = body.Refferal;
    try {
      const created = await this.RefferalModel.create({
        Refferal: Refferal,
    
      });
      return created;
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new ConflictException('Already Exist!');
      }
      throw new InternalServerErrorException('Failed to create');
    }   
  }



  async findAll() {
    try {
      const records = await this.RefferalModel.findAll();
      return records;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch  Record');
    }  
  }



  async findOne(id: number) {
    const aRecord = await this.RefferalModel.findOne({where:{id:id}});
    if (!aRecord) {
      throw new NotFoundException(`Recrod with ID ${id} not found`);
    }else{
      return aRecord
  }  
  }



  async update(id: number, body: UpdateRefferalDto) {
    const getRecord = await this.findOne(id)
    const updatedOne = await getRecord.update({
      Refferal: body.Refferal,

    })
  return {status: true, updatedOne}   
  }


  
  async remove(id: number) {
    try {
      const deletedRows = await this.RefferalModel.destroy({ where: { id } });
      if (deletedRows === 0) {
        throw new NotFoundException(`Record with ID ${id} not found`);
      }
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete the record');
    }
  }



}
