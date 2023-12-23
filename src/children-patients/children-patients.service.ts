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
        ageGroup: body.ageGroup,
        sex:body.sex,
        disability: body.disability,
        reasonOfDisability:body.reasonOfDisability,
        height: body.height,
        weight: body.weight,
        BMI: await calculateBMI(body.weight,body.height),      
        VisitReasonID: body.VisitReasonID,
        physicianName: body.physicianName,
        servicesIntroduction: body.servicesIntroduction,
        remarks: body.remarks,
        refferal: body.refferal,
        clinicID: body.clinicID,
        diagnoses: body.diagnoses,
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
    const aRecord = await this.ChildModel.scope('includeAssociations').findOne({where:{id:id}});
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
      ageGroup: body.ageGroup,
      sex:body.sex,
      disability: body.disability,
      reasonOfDisability:body.reasonOfDisability,
      height: body.height,
      weight: body.weight,
      BMI: await calculateBMI(body.weight,body.height),
      VisitReasonID: body.VisitReasonID,
      physicianName: body.physicianName,
      servicesIntroduction: body.servicesIntroduction,
      remarks: body.remarks,
      refferal: body.refferal,
      clinicID: body.clinicID,
      diagnoses: body.diagnoses,
      DataEntrantID: body.DataEntrantID,
    })
    return {status: true, updatedOne}    


  }



  
  async getTodayspatient(){
    const currentDate = new Date();
    const todaysDate = currentDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    const AllRecords = await this.ChildModel.findAll({where:{visitDate:todaysDate}});
    return AllRecords

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
