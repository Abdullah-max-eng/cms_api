import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateNationalityDto } from './dto/create-nationality.dto';
import { UpdateNationalityDto } from './dto/update-nationality.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Nationality } from './entities/nationality.entity';
import { error } from 'console';

@Injectable()
export class NationalityService {

  constructor(@InjectModel(Nationality) private NationalityModel: typeof Nationality){}




  async create(body: CreateNationalityDto) {
          try{
          const createdRecord = await this.NationalityModel.create({
            nationality: body.nationality
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
      const records = await this.NationalityModel.findAll();
      return records;
    } catch (error) {
      throw new InternalServerErrorException('Failed to Records');
  }    



  }




  async findOne(id: number) {
    const aRecord = await this.NationalityModel.findOne({where:{id:id}});
    if (!aRecord) {
      throw new NotFoundException(`Nationality Recrod with ID ${id} not found`);
    }else{
      return aRecord
    }  
  
  }




  async update(id: number, body: UpdateNationalityDto) {
    const getRecord = await this.findOne(id)
    const updatedOne = await getRecord.update({
      nationality: body.nationality,
    })
    return {status: true, updatedOne}  
  }



  async  remove(id: number) {
    try {
      const deletedRows = await this.NationalityModel.destroy({ where: { id } });
      if (deletedRows === 0) {
        throw new NotFoundException(`Record with ID ${id} not found`);
      }
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete the record');
    }   
  }




}
