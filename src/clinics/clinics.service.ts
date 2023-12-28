import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateClinicDto } from './dto/create-clinic.dto';
import { UpdateClinicDto } from './dto/update-clinic.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Clinic } from './entities/clinic.entity';
import { where } from 'sequelize';

@Injectable()
export class ClinicsService {


  constructor(@InjectModel(Clinic) private ClinicModle: typeof Clinic){}




      
      async create(body: CreateClinicDto) {
        const clinicName = body.clinicName;
        const cityId = body.cityId;
        const clinicCreated = await this.ClinicModle.create({clinicName:clinicName,cityId:cityId})
          return {status: true, clinicCreated};
      }





  
      async findAll() {
        const allClininc = await this.ClinicModle.findAll()
        return allClininc;
      }




    

      async findOne(id:number){
        const clinic  =await  this.ClinicModle.scope('withAssociations').findOne({ where: { id } })
        if(clinic){
          return clinic
        }else{
          throw new NotFoundException("Clinic with this Id Not found")
        }
      }




      async  update(id: number, body: UpdateClinicDto) {
        const exinting = await this.getOne(id);
        const updatedOne = await exinting.update({
          clinicName: body.clinicName,
          cityId: body.cityId
    
        })
        return {status: true, updatedOne};
      }
    






        async remove(id: number) {
          const clinic = await this.getOne(id)
          const copy = clinic
          await clinic.destroy()
          return {status: true, copy};
        }










      async getOne(id:number){
        const clinic  = await this.ClinicModle.scope({method:["finOne", id]}).findOne()
        if(clinic){
          return clinic
        }else{
          throw new NotFoundException("Clinic with this Id Not found")
        }
      }



  
}








