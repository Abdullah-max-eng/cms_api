import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateDiagnosisDto } from './dto/create-diagnosis.dto';
import { UpdateDiagnosisDto } from './dto/update-diagnosis.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Diagnosis } from './entities/diagnosis.entity';

@Injectable()
export class DiagnosesService {
    constructor(@InjectModel(Diagnosis) private DiagnoseModel: typeof Diagnosis){}









  async create(body: CreateDiagnosisDto) {
    const newRecord = body.diagnoses;
    try {
      const createdRecord = await this.DiagnoseModel.create({
        diagnoses: newRecord,
    
      });
      return createdRecord;
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new ConflictException('Age Group with the given Group already exists');
      }
      throw new InternalServerErrorException('Failed to create Group');
    }  }








  async findAll() {
    try {
      const records = await this.DiagnoseModel.findAll();
      return records;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch Medicaiton Record');
    }
  }








  async findOne(id: number) {
      const aRecord = await this.DiagnoseModel.findOne({where:{id:id}});
      if (!aRecord) {
        throw new NotFoundException(`Medication Recrod with ID ${id} not found`);
      }else{
        return aRecord
    }
  }










  async update(id: number, body: UpdateDiagnosisDto) {
    const getRecord = await this.findOne(id)
    const updatedOne = await getRecord.update({
      diagnoses: body.diagnoses,

    })
  return {status: true, updatedOne}  

}








  async remove(id: number) {
    try {
      const deletedRows = await this.DiagnoseModel.destroy({ where: { id } });
      if (deletedRows === 0) {
        throw new NotFoundException(`Record with ID ${id} not found`);
      }
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete the record');
    };
  }







}
