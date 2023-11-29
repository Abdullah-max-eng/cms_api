import { Injectable, NotFoundException, ConflictException, InternalServerErrorException } from '@nestjs/common';
import { CreateDrugDto } from './dto/create-drug.dto';
import { UpdateDrugDto } from './dto/update-drug.dto';
import { Drug } from './entities/drug.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DrugsService {
  constructor(@InjectModel(Drug) private DrugsModel: typeof Drug) {}




  async create(body : CreateDrugDto){
    const brandNama = body.brandName;
    const price = body.price;
    const presentation = body.presentation;
    const form = body.form;
    const strength = body.strength;
    const code = body.code;

    try {
      const createdDrug = await this.DrugsModel.create({
        BrandName: brandNama,
        strength:  strength,
        presentation: presentation,
        form: form,
        price: price,
        code: code
      });
      return createdDrug;
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new ConflictException('Drug with the given name already exists');
      }
      throw new InternalServerErrorException('Failed to create drug');
    }
  }






  async findAll(){
    try {
      const drugs = await this.DrugsModel.scope('datesExcluded').findAll();
      return drugs;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch drugs');
    }
  }





  async findOne(id: number) {
    
      const drug = await this.DrugsModel.findByPk(id);
      if (!drug) {
        throw new NotFoundException(`Drug with ID ${id} not found`);
      }else{
        return drug
      }
  
  }






  async update(id: number, body: UpdateDrugDto) {
        const getDrug = await this.findOne(id)
        const updatedOne = await getDrug.update({
          BrandName: body.brandName,
          strength:  body.strength,
          presentation: body.presentation,
          form: body.form,
          price: body.price,
          code: body.code

        })
      return {status: true, updatedOne}

  }





  async remove(id: number): Promise<void> {
    try {
      const deletedRows = await this.DrugsModel.destroy({ where: { id } });
      if (deletedRows === 0) {
        throw new NotFoundException(`Drug with ID ${id} not found`);
      }
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete drug');
    }
  }







  
}
