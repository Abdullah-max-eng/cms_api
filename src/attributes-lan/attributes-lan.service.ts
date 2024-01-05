import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAttributesLanDto } from './dto/create-attributes-lan.dto';
import { UpdateAttributesLanDto } from './dto/update-attributes-lan.dto';
import { InjectModel } from '@nestjs/sequelize';
import { AttributesLan } from './entities/attributes-lan.entity';



@Injectable()
export class AttributesLanService {


  constructor(@InjectModel(AttributesLan) private LanguageModel : typeof AttributesLan){}





  async create(body: CreateAttributesLanDto) {
    
    try{
      const createdRecord = await this.LanguageModel.create(
        {
 

            name:body.name 






        }
      );

      return createdRecord


    }catch(error){
      console.log(error)
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




async update(id: number, body: UpdateAttributesLanDto) {
    const recordToBeUpdated = await this.findOne(id);
    const updated = await recordToBeUpdated.update(

        {
  

          name:body.name 






      }


      

    )

    return updated
  }





}
