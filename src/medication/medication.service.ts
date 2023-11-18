import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateMediccationDto } from './dto/create-medication.dto';
import { UpdateMedicationDto } from './dto/update-medication.dto';
import { Medication } from './entities/medication.entity';
import { InjectModel } from '@nestjs/sequelize';
import { PublicPatient } from 'src/public-patients/entities/public-patient.entity';
@Injectable()
export class MedicationService {

  constructor(@InjectModel(Medication) private MedicaitonModel: typeof Medication){}




  async create(body: CreateMediccationDto) {
    const starteDate = body.startDate;
    const EndDate = body.endDate;
    const DrugId = body.drugID;


    const ReproductivePatientID = body.ReproductivePatientID;
    const publicPatiendID = body.PublicPatientID;
    const ChildrenPatientID = body.ChildrenPatientID;

    try {
      const createMdeciationRecord = await this.MedicaitonModel.create({
        startDate: starteDate,
        endDate:  EndDate,
        drugID: DrugId,


        ReproductivePatientID: ReproductivePatientID,
        PublicPatientID: publicPatiendID,
        ChildrenPatientID: ChildrenPatientID

      });
      return createMdeciationRecord;
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new ConflictException('Drug with the given name already exists');
      }
      throw new InternalServerErrorException('Failed to create record');
    }
  }








  async findAll(){
    try {
      const records = await this.MedicaitonModel.scope('withDrug').findAll();
      return records;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch Medicaiton Record');
    }
  }








  async findOne(id: number) {
    
    const aRecord = await this.MedicaitonModel.scope('withDrug').findOne({where:{id:id}});
    if (!aRecord) {
      throw new NotFoundException(`Medication Recrod with ID ${id} not found`);
    }else{
      return aRecord
    }

  }




  async update(id: number, body: UpdateMedicationDto) {
        const getRecord = await this.findOne(id)
        const updatedOne = await getRecord.update({
          startDate: body.startDate,
          endDate:  body.endDate,
          drugID: body.drugID,



          ReproductivePatientID: body.ReproductivePatientID,
          publicPatiendID: body.PublicPatientID ,
          ChildrenPatientID: body.ChildrenPatientID
          

        })
      return {status: true, updatedOne}
  }






 async remove(id: number) {
    try {
      const deletedRows = await this.MedicaitonModel.destroy({ where: { id } });
      if (deletedRows === 0) {
        throw new NotFoundException(`Record with ID ${id} not found`);
      }
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete the record');
    }  
  }




}
