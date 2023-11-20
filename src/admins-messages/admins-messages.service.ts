import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateAdminsMessageDto } from './dto/create-admins-message.dto';
import { UpdateAdminsMessageDto } from './dto/update-admins-message.dto';
import { AdminsMessage } from './entities/admins-message.entity';
import { InjectModel } from '@nestjs/sequelize';
import { error } from 'console';

@Injectable()
export class AdminsMessagesService {

  constructor(@InjectModel(AdminsMessage) private MessagesModel: typeof AdminsMessage){}





  async create(body: CreateAdminsMessageDto) {
    try{
      const createdRecord = await this.MessagesModel.create({
        message: body.message
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
      const records = await this.MessagesModel.findAll();
      return records;
    } catch (error) {
      throw new InternalServerErrorException('Failed to Records');
  }    
  }




  async findOne(id: number) {
    const aRecord = await this.MessagesModel.findOne({where:{id:id}});
    if (!aRecord) {
      throw new NotFoundException(`Message Recrod with ID ${id} not found`);
    }else{
      return aRecord
    }    
  
  }




  async update(id: number, body: UpdateAdminsMessageDto) {
    const getRecord = await this.findOne(id)
    const updatedOne = await getRecord.update({
      message: body.message,
    })
    return {status: true, updatedOne}    
  }





  async remove(id: number) {
    try {
      const deletedRows = await this.MessagesModel.destroy({ where: { id } });
      if (deletedRows === 0) {
        throw new NotFoundException(`Record with ID ${id} not found`);
      }
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete the record');
    }    
  }




}
