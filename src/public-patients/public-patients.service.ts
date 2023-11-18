import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePublicPatientDto } from './dto/create-public-patient.dto';
import { UpdatePublicPatientDto } from './dto/update-public-patient.dto';
import { InjectModel } from '@nestjs/sequelize';
import { PublicPatient } from './entities/public-patient.entity';
import { calculateBMI } from 'assests/BMICalculator';
@Injectable()
export class PublicPatientsService {
  constructor(@InjectModel(PublicPatient) private PublicPModle : typeof PublicPatient){}


  async create(body: CreatePublicPatientDto) {
    try {
      const created = await this.PublicPModle.create({
        visitDate: body.visitDate,
        name: body.name,
        nationality: body.nationality,
        address: body.address,
        DOB: body.DOB,
        ageGroupID: body.ageGroupID,
        sex:body.sex,
        disability: body.disability,
        reasonOfDisability:body.reasonOfDisability,
        height: body.height,
        heightsq: body.heightsq,
        weight: body.weight,
        BMI: await calculateBMI(body.weight,body.height),
        sugarTest: body.sugarTest,
        bloodPressure: body.bloodPressure,
        VisitReasonID: body.VisitReasonID,
        physicianName: body.physicianName,
        servicesIntroduction: body.servicesIntroduction,
        remarks: body.remarks,
        RefferalID: body.RefferalID,
        clinicID: body.clinicID,
        DataEntrantID: body.DataEntrantID,      
    
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
      const records = await this.PublicPModle.findAll();
      return records;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch  Record');
    }    
  
  }



  

  async findOne(id: number) {
        const aRecord = await this.PublicPModle.findOne({where:{id:id}});
        if (!aRecord) {
          throw new NotFoundException(`Recrod with ID ${id} not found`);
        }else{
          return aRecord
      }  

    }



  async update(id: number, body: UpdatePublicPatientDto) {
      const getRecord = await this.findOne(id)
      const updatedOne = await getRecord.update({
        visitDate: body.visitDate,
        name: body.name,
        nationality: body.nationality,
        address: body.address,
        DOB: body.DOB,
        ageGroupID: body.ageGroupID,
        sex:body.sex,
        disability: body.disability,
        reasonOfDisability:body.reasonOfDisability,
        height: body.height,
        heightsq: body.heightsq,
        weight: body.weight,
        BMI: await calculateBMI(body.weight,body.height),
        sugarTest: body.sugarTest,
        bloodPressure: body.bloodPressure,
        VisitReasonID: body.VisitReasonID,
        physicianName: body.physicianName,
        servicesIntroduction: body.servicesIntroduction,
        remarks: body.remarks,
        RefferalID: body.RefferalID,
        clinicID: body.clinicID,
        DataEntrantID: body.DataEntrantID,
      })
      return {status: true, updatedOne}    


  
  }




  async remove(id: number) {
    try {
      const deletedRows = await this.PublicPModle.destroy({ where: { id } });
      if (deletedRows === 0) {
        throw new NotFoundException(`Record with ID ${id} not found`);
      }
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete the record');
    }  

  }







}
