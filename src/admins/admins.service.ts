import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { InjectModel } from '@nestjs/sequelize';
import { changePassDto } from './dto/change-pass.dto';



@Injectable()
export class AdminsService {
  constructor(@InjectModel(Admin) private AdminModel: typeof Admin){}







  async create(body: CreateAdminDto) {
    const username =  body.username
    const password = body.password
    const email = body.email

    const newUser = await this.AdminModel.create({
      username : username,
      password: password,
      email:email
      })
      return {
        "status ": "New Admin Created",
         newUser
      };


  }








  async findAll() {
    const allAdmin = await this.AdminModel.findAll()
    return allAdmin
  }






  async getOne(id: number) {
    const admin = await this.AdminModel.scope({method:['findOne', id]}).findOne()
    if(admin){
      return admin
    }
    else{
      throw new NotFoundException("User with this ID not Found!")
    }
  }








  async findOne(id: number) {
    const exsitingOne = await this.AdminModel.scope({method:['findOne', id]}).findOne();
    if(!exsitingOne){
      throw new NotFoundException("No Admin Found with this ID");
    }else{
      return {exsitingOne}
    }
    
  }




  async findByEmail(email: string) {
    return this.AdminModel.findOne({where:{email:email}})}








  async update(id: number, body: UpdateAdminDto) {
    const admin = await this.getOne(id)
    await admin.update({
      username: body.username,
      email: body.email,
      password: body.password,
      Hashedrt: body.Hashedrt
    })
    return {status: "true", admin};

  }







  async remove(id: number) {
    const admin = await this.getOne(id);
    const DeletedAdmin = await this.getOne(id);
    admin.destroy()
    return {status: "true", DeletedAdmin};
  }







  
  
  async updatePass(id: number, body: changePassDto) {
    const user = await this.getOne(id);
    await user.update({
      password: body.newPassword,
    })
    return `Password Updated`;
  }





}
