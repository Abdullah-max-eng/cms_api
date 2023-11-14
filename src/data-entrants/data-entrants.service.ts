import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDataEntrantDto } from './dto/create-data-entrant.dto';
import { UpdateDataEntrantDto } from './dto/update-data-entrant.dto';
import { DataEntrant } from './entities/data-entrant.entity';
import { InjectModel } from '@nestjs/sequelize';
import { changePassDto } from 'src/admins/dto/change-pass.dto';

@Injectable()
export class DataEntrantsService {
  constructor(@InjectModel(DataEntrant) private DataEntrantModel: typeof DataEntrant){}







  async create(body: CreateDataEntrantDto) {
    const username =  body.username
    const password = body.password
    const email = body.email
    const cID = body.clinicId

    const newDataEntrant = await this.DataEntrantModel.create({
      username : username,
      password: password,
      email:email,
      clinicId: cID
      })
      return {
        "status ": "New Data Entrant Created",
         newDataEntrant
      };


  }








  async findAll() {
    const allDataEntrants  = await this.DataEntrantModel.findAll()
    return allDataEntrants
  }






  async getOne(id: number) {
    const dataEntrant = await this.DataEntrantModel.scope({method:['findOne', id]}).findOne()
    if(dataEntrant){
      return dataEntrant
    }
    else{
      throw new NotFoundException("User with this ID not Found!")
    }
  }








  async findOne(id: number) {
    const exsitingOne = await this.DataEntrantModel.scope({method:['findOne', id]}).findOne();
    if(!exsitingOne){
      throw new NotFoundException("No Data Entrant Found with this ID");
    }else{
      return {exsitingOne}
    }
    
  }





  async findByEmail(email: string) {
    return this.DataEntrantModel.findOne({where:{email:email}})}








  async update(id: number, body: UpdateDataEntrantDto) {
    const dataEntrant = await this.getOne(id)
    await dataEntrant.update({
      username: body.username,
      email: body.email,
      password: body.password,
      clinicId: body.clinicId,
      Hashedrt: body.Hashedrt
    })
    return {status: "true", dataEntrant};

  }







  async remove(id: number) {
    const DataEntrant = await this.getOne(id);
    const DeletedDataEntrant = await this.getOne(id);
    DataEntrant.destroy()
    return {status: "true", DeletedDataEntrant};
  }







  
  
  async updatePass(id: number, body: changePassDto) {
    const user = await this.getOne(id);
    await user.update({
      password: body.newPassword,
    })
    return `Password Updated`;
  }




}

