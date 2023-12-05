import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateTypesOfTestDto } from './dto/create-types-of-test.dto';
import { UpdateTypesOfTestDto } from './dto/update-types-of-test.dto';
import { TypesOfTest } from './entities/types-of-test.entity';
import { InjectModel } from '@nestjs/sequelize';
@Injectable()
export class TypesOfTestsService {

  constructor(@InjectModel(TypesOfTest) private TypeOfTestModel: typeof TypesOfTest){}


  


  async create(body: CreateTypesOfTestDto) {
    const record = body.testType;
    try {
      const created = await this.TypeOfTestModel.create({
        testType: record,
    
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
      const records = await this.TypeOfTestModel.findAll();
      return records;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch  Record');
    }
  }





  async findOne(id: number) {
    const aRecord = await this.TypeOfTestModel.findOne({where:{id:id}});
    if (!aRecord) {
      throw new NotFoundException(`Recrod with ID ${id} not found`);
    }else{
      return aRecord
  }
  }





  async update(id: number, body: UpdateTypesOfTestDto) {
      const getRecord = await this.findOne(id)
      const updatedOne = await getRecord.update({
        testType: body.testType,

      })
    return {status: true, updatedOne} 
  }





    async remove(id: number) {
      try {
        const deletedRows = await this.TypeOfTestModel.destroy({ where: { id } });
        if (deletedRows === 0) {
          throw new NotFoundException(`Record with ID ${id} not found`);
        }
      } catch (error) {
        throw new InternalServerErrorException('Failed to delete the record');
      }
    
    }



}
