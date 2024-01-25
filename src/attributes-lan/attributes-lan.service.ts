import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAttributesLanDto } from './dto/create-attributes-lan.dto';
import { UpdateAttributesLanDto } from './dto/update-attributes-lan.dto';
import { InjectModel } from '@nestjs/sequelize';
import { AttributesLan } from './entities/attributes-lan.entity';
import { where } from 'sequelize';



@Injectable()
export class AttributesLanService {


  constructor(@InjectModel(AttributesLan) private LanguageModel : typeof AttributesLan){}





  async create(body: CreateAttributesLanDto) {
    try {
      const createdRecord = await this.LanguageModel.create(body as any);
      return createdRecord;
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to be caught by the calling function or middleware
    }
  }









async findOne(id: number) {
    const OneBasedOniD = await this.LanguageModel.scope('NoDates').findByPk(id)
    if(OneBasedOniD){
      return OneBasedOniD
    }else{
      throw new NotFoundException("Recrod with this ID not Found ")
    }
  }





  async findOneByPrfix(prefix: string) {
    try {
      const fetchedOne = await this.LanguageModel.findOne({ where: { prefix: prefix } });
      return fetchedOne;
    } catch (error) {
      // Handle the error (log it, throw a custom error, etc.)
      console.error(error);
      throw new Error('An error occurred while fetching data.');
    }
  }



  async getAllPrefixes() {
    try {
      const allRecords = await this.LanguageModel.findAll({ attributes: ['prefix'] });
      return allRecords.map(record => record.prefix);
    } catch (error) {
      // Handle the error (log it, throw a custom error, etc.)
      console.error(error);
      throw new Error('An error occurred while fetching data.');
    }
  }
  
  



  

  async update(id: number, body: UpdateAttributesLanDto) {
    const recordToBeUpdated = await this.findOne(id);

    try {
      const updated = await recordToBeUpdated.update(body as any);
      return updated;
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to be caught by the calling function or middleware
    }
  }





}
