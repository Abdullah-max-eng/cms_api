import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateServicesIntroductionDto } from './dto/create-services-introduction.dto';
import { UpdateServicesIntroductionDto } from './dto/update-services-introduction.dto';
import { ServicesIntroduction } from './entities/services-introduction.entity';
import { InjectModel } from '@nestjs/sequelize';
import { error } from 'console';

@Injectable()
export class ServicesIntroductionService {
  
  constructor(@InjectModel(ServicesIntroduction) private ServiceIntroductionModel: typeof ServicesIntroduction){}

  
  
  async create(body: CreateServicesIntroductionDto) {
    try{
      const createdRecord = await this.ServiceIntroductionModel.create({
        ServiceIntroduction: body.ServiceIntroduction
      })
      return createdRecord

    }catch{
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new ConflictException('Recrod with the given name already exists');
      }
      throw new InternalServerErrorException('Failed to create record');
      
    }  
  
  }




  async findAll() {
    try {
      const records = await this.ServiceIntroductionModel.findAll();
      return records;
    } catch (error) {
      throw new InternalServerErrorException('Failed to Records');
  }    
  }




  async findOne(id: number) {
    const aRecord = await this.ServiceIntroductionModel.findOne({where:{id:id}});
    if (!aRecord) {
      throw new NotFoundException(`Medication Recrod with ID ${id} not found`);
    }else{
      return aRecord
    }    
  }





  async update(id: number, body: UpdateServicesIntroductionDto) {
    const getRecord = await this.findOne(id)
    const updatedOne = await getRecord.update({
      ServiceIntroduction: body.ServiceIntroduction,
    })
    return {status: true, updatedOne}  
  }




  async remove(id: number) {
    try {
      const deletedRows = await this.ServiceIntroductionModel.destroy({ where: { id } });
      if (deletedRows === 0) {
        throw new NotFoundException(`Record with ID ${id} not found`);
      }
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete the record');
    }     
  }





}
