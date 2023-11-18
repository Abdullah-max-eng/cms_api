import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateChildrenPatientDto } from './dto/create-children-patient.dto';
import { UpdateChildrenPatientDto } from './dto/update-children-patient.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ChildrenPatient } from './entities/children-patient.entity';
import { calculateBMI } from 'assests/BMICalculator';

@Injectable()
export class ChildrenPatientsService {


  constructor(@InjectModel(ChildrenPatient) private ChildModel: typeof ChildrenPatient){}





  async create(body: CreateChildrenPatientDto) {
    try {
      const created = await this.ChildModel.create({
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
      const records = await this.ChildModel.findAll();
      return records;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch  Record');
    }     
  }




  async findOne(id: number) {
    const aRecord = await this.ChildModel.findOne({where:{id:id}});
    if (!aRecord) {
      throw new NotFoundException(`Recrod with ID ${id} not found`);
    }else{
      return aRecord
  }    
  }




  async update(id: number, body: UpdateChildrenPatientDto) {
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
      const deletedRows = await this.ChildModel.destroy({ where: { id } });
      if (deletedRows === 0) {
        throw new NotFoundException(`Record with ID ${id} not found`);
      }
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete the record');
    }    
  }






}
