import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateReproductivePatientDto } from './dto/create-reproductive-patient.dto';
import { UpdateReproductivePatientDto } from './dto/update-reproductive-patient.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ReproductivePatient } from './entities/reproductive-patient.entity';
import { calculateBMI } from 'assests/BMICalculator';
@Injectable()
export class ReproductivePatientsService {
  constructor(@InjectModel(ReproductivePatient) private RPModel: typeof ReproductivePatient){}



          async create(body: CreateReproductivePatientDto) {
            try {
                const created = await this.RPModel.create({
               
                  visitDate: body.visitDate,
                  name: body.name,
                  address: body.address,
                  DOB: body.DOB,
                  Height: body.Height,
                  Weight: body.Weight,
                  BMI: await calculateBMI(body.Weight,body.Height),
                  MaritalStatus: body.MaritalStatus,
                  NumberOfChildren: body.NumberOfChildren,
                  PreviouseAbortions: body.PreviouseAbortions,
                  nationality: body.nationality,
                  DateOfLastBirth: body.DateOfLastBirth,
                  NormalBirthStatus: body.NormalBirthStatus,
                  DateOfLastMenstruation: body.DateOfLastMenstruation,
                  contraceptives: body.contraceptives,
                  IronInspection: body.IronInspection,
                  DiabetesScreening: body.DiabetesScreening,
                  BloodPressure: body.BloodPressure,
                  physicianName: body.physicianName,
                  ageGroup: body.ageGroup,
                  VisitReasonID: body.VisitReasonID,
                  clinicID: body.clinicID,
                  DataEntrantID: body.DataEntrantID,
                  refferal: body.refferal,
                  diagnoses: body.diagnoses,
                  marriageAge: body.marriageAge,
                  servicesIntroduction: body.servicesIntroduction
              
                });
                return created;
              } catch (error) {
                console.log(error)
                if (error.name === 'SequelizeUniqueConstraintError') {
                  throw new ConflictException('Already Exist!');
                }
                throw new InternalServerErrorException('Failed to create');
              }     
            
          }




          async findAll() {
            try {
              const records = await this.RPModel.findAll();
              return records;
            } catch (error) {
              throw new InternalServerErrorException('Failed to fetch  Record');
            }  
          
          }




          async findOne(id: number) {
            const aRecord = await this.RPModel.scope('includeAssociations').findOne({where:{id:id}});
            if (!aRecord) {
              throw new NotFoundException(`Recrod with ID ${id} not found`);
            }else{
              return aRecord
          }  
          }






          async update(id: number, body: UpdateReproductivePatientDto) {
              const getRecord = await this.findOne(id)
              const updatedOne = await getRecord.update({
                visitDate: body.visitDate,
                name: body.name,
                address: body.address,
                DOB: body.DOB,
                Height: body.Height,
                Weight: body.Weight,
                BMI: await calculateBMI(body.Weight,body.Height),
                MaritalStatus: body.MaritalStatus,
                NumberOfChildren: body.NumberOfChildren,
                nationality: body.nationality,
                PreviouseAbortions: body.PreviouseAbortions,
                DateOfLastBirth: body.DateOfLastBirth,
                NormalBirthStatus: body.NormalBirthStatus,
                DateOfLastMenstruation: body.DateOfLastMenstruation,
                contraceptives: body.contraceptives,
                IronInspection: body.IronInspection,
                DiabetesScreening: body.DiabetesScreening,
                BloodPressure: body.BloodPressure,
                physicianName: body.physicianName,
                ageGroup: body.ageGroup,
                VisitReasonID: body.VisitReasonID,
                clinicID: body.clinicID,
                DataEntrantID: body.DataEntrantID,
                refferal: body.refferal,
                diagnoses: body.diagnoses,
                servicesIntroduction: body.servicesIntroduction,
                marriageAge: body.marriageAge,

              })

            return {status: true, updatedOne}    
          }




          async remove(id: number) {
            try {
              const deletedRows = await this.RPModel.destroy({ where: { id } });
              if (deletedRows === 0) {
                throw new NotFoundException(`Record with ID ${id} not found`);
              }
            } catch (error) {
              throw new InternalServerErrorException('Failed to delete the record');
            }  
          
          }



          async getTodayspatient(){
            const currentDate = new Date();
            const todaysDate = currentDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD
            const AllRecords = await this.RPModel.findAll({where:{visitDate:todaysDate}});
            return AllRecords
        
          }
        


  




}


