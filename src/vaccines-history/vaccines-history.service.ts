import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateVaccinesHistoryDto } from './dto/create-vaccines-history.dto';
import { UpdateVaccinesHistoryDto } from './dto/update-vaccines-history.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VaccinesHistory } from './entities/vaccines-history.entity';

@Injectable()
export class VaccinesHistoryService {

  constructor(@InjectModel(VaccinesHistory) private VHModel: typeof VaccinesHistory){}



    async create(body: CreateVaccinesHistoryDto) {
      const first_Dose_Date = body.firstDoseDate;
      const numberOfTakenDoses = body.numberOfTakenDoses;
      const status = body.vaccinationStatus;
      const comments = body.comments;
      const vaccineID = body.vaccineId;
      const ReproductivePatientID = body.ReproductivePatientID
      const PublicPatientID = body.PublicPatientID
      const ChildrenPatientID = body.ChildrenPatientID

      try {
        const createdVaccineRecord = await this.VHModel.create({
          firstDoseDate: first_Dose_Date,
          NumberofTakenDoses:  numberOfTakenDoses,
          vaccinationStatus: status,
          comments: comments,
          vaccineId: vaccineID,


          ReproductivePatientID:  ReproductivePatientID,
          PublicPatientID: PublicPatientID,
          ChildrenPatientID:ChildrenPatientID
        });
        
        return createdVaccineRecord;
      } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
          throw new ConflictException('Vaccine Record with the given name already exists');
        }
        throw new InternalServerErrorException('Failed to create Record');
      }
    }




    async findAll() {
      try {
        const VaccinesRecord = await this.VHModel.scope('withVaccine').findAll();
        return VaccinesRecord;
      } catch (error) {
        throw new InternalServerErrorException('Failed to fetch Vaccines Records');
      }
    }




    async findOne(id: number) {
      const vaccine = await this.VHModel.scope('withVaccine').findByPk(id);
      if (!vaccine) {
        throw new NotFoundException(`Vaccine Record with ID ${id} not found`);
      }else{
        return vaccine
      }  
    
    }




    async update(id: number, body: UpdateVaccinesHistoryDto) {
      const vaccine = await this.findOne(id)
      const updatedOne = await vaccine.update({
        firstDoseDate: body.firstDoseDate,
        NumberofTakenDoses:  body.numberOfTakenDoses,
        vaccinationStatus: body.vaccinationStatus,
        comments: body.comments,
        vaccineId: body.vaccineId,
        ReproductivePatientID:  body.ReproductivePatientID,
        PublicPatientID: body.PublicPatientID,
        ChildrenPatientID: body.ChildrenPatientID

      })
    return {status: true, updatedOne}

    }




    async  remove(id: number) {
          try {
            const deletedRows = await this.VHModel.destroy({ where: { id } });
            
            if (deletedRows === 0) {
              throw new NotFoundException(`Vaccine Record with ID ${id} not found`);
            }else{
              return {status: true}
            }
          } catch (error) {
            throw new InternalServerErrorException('Failed to delete Vaccine Record');
          }

      }








      async removeAllBasedOnPPID(PPid: number) {
        try {
          
          const allRecords = await this.VHModel.scope({ method: ['forPublicPatient', PPid] }).findAll();
            console.log(allRecords)
          // Destroy (delete) each retrieved record
          for (const record of allRecords) {
            await record.destroy();
          }

          return { status: true };
        } catch (error) {
          throw new InternalServerErrorException('Failed to delete the records');
        }
  }




}
