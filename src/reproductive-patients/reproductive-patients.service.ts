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
                  nationality: body.nationality,
                  visitDate: body.visitDate,
                  name: body.name,
                  address: body.address,
                  DOB: body.DOB,
                  Height: body.Height,
                  Heightsq: body.Heightsq,
                  Weight: body.Weight,
                  BMI: await calculateBMI(body.Weight,body.Height),
                  MaritalStatus: body.MaritalStatus,
                  NumberOfChildrebt: body.NumberOfChildren,
                  PreviouseAbortions: body.PreviousAbortions,
                  DateOfLastBirth: body.DateOfLastBirth,
                  NormalBirthStatus: body.NormalBirthStatus,
                  DateOfLastMenstruation: body.DateOfLastMenstruation,
                  contraceptives: body.contraceptives,
                  IronInspection: body.IronInspection,
                  DiabetesScreening: body.DiabetesScreening,
                  BloodPressure: body.BloodPressure,
                  physicianName: body.physicianName,
                  ageGroupID: body.ageGroupID,
                  VisitReasonID: body.VisitReasonID,
                  clinicID: body.clinincID,
                  DataEntrantID: body.DataEntrantID,
                  RefferalID: body.RefferalID,
                  servicesIntroduction: body.servicesIntroduction
              
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
              const records = await this.RPModel.findAll();
              return records;
            } catch (error) {
              throw new InternalServerErrorException('Failed to fetch  Record');
            }  
          
          }




          async findOne(id: number) {
            const aRecord = await this.RPModel.findOne({where:{id:id}});
            if (!aRecord) {
              throw new NotFoundException(`Recrod with ID ${id} not found`);
            }else{
              return aRecord
          }  
          }





          async update(id: number, body: UpdateReproductivePatientDto) {
            const getRecord = await this.findOne(id)
            const updatedOne = await getRecord.update({
              nationality: body.nationality,
              visitDate: body.visitDate,
              name: body.name,
              address: body.address,
              DOB: body.DOB,
              Height: body.Height,
              Heightsq: body.Heightsq,
              Weight: body.Weight,
              BMI: await calculateBMI(body.Weight,body.Height),
              MaritalStatus: body.MaritalStatus,
              NumberOfChildrebt: body.NumberOfChildren,
              PreviouseAbortions: body.PreviousAbortions,
              DateOfLastBirth: body.DateOfLastBirth,
              NormalBirthStatus: body.NormalBirthStatus,
              DateOfLastMenstruation: body.DateOfLastMenstruation,
              contraceptives: body.contraceptives,
              IronInspection: body.IronInspection,
              DiabetesScreening: body.DiabetesScreening,
              BloodPressure: body.BloodPressure,
              physicianName: body.physicianName,
              ageGroupID: body.ageGroupID,
              VisitReasonID: body.VisitReasonID,
              clinicID: body.clinincID,
              DataEntrantID: body.DataEntrantID,
              RefferalID: body.RefferalID,
              servicesIntroduction: body.servicesIntroduction


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


  




}


