import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateAgeGroupDto } from './dto/create-age-group.dto';
import { UpdateAgeGroupDto } from './dto/update-age-group.dto';
import { InjectModel } from '@nestjs/sequelize';
import { AgeGroup } from './entities/age-group.entity';

@Injectable()
export class AgeGroupService {

  constructor(@InjectModel(AgeGroup) private AgeGroupModel: typeof AgeGroup){}
  
  


  async create(body: CreateAgeGroupDto) {
    const AgeGroup = body.ageGroup;
    try {
      const createdAgeGroup = await this.AgeGroupModel.create({
        ageGroup: AgeGroup,
    
      });
      return createdAgeGroup;
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new ConflictException('Age Group with the given Group already exists');
      }
      throw new InternalServerErrorException('Failed to create Group');
    }
  }



  async findAll() {
    try {
      const records = await this.AgeGroupModel.findAll();
      return records;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch Medicaiton Record');
    }
  }



  async findOne(id: number) {
    const aRecord = await this.AgeGroupModel.findOne({where:{id:id}});
    if (!aRecord) {
      throw new NotFoundException(`Medication Recrod with ID ${id} not found`);
    }else{
      return aRecord
  }}



  async update(id: number, body: UpdateAgeGroupDto) {
    const getRecord = await this.findOne(id)
    const updatedOne = await getRecord.update({
      ageGroup: body.ageGroup,

    })
  return {status: true, updatedOne}  

}





  async remove(id: number) {
    try {
      const deletedRows = await this.AgeGroupModel.destroy({ where: { id } });
      if (deletedRows === 0) {
        throw new NotFoundException(`Record with ID ${id} not found`);
      }
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete the record');
    } ;
  }




}
