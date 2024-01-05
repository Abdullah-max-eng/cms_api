import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateReasonToVisitDto } from './dto/create-reason-to-visit.dto';
import { UpdateReasonToVisitDto } from './dto/update-reason-to-visit.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ReasonToVisit } from './entities/reason-to-visit.entity';

@Injectable()
export class ReasonToVisitService {

  constructor(@InjectModel(ReasonToVisit) private reasonToVisitModel: typeof ReasonToVisit){}



  async create(body: CreateReasonToVisitDto) {
    const RTOVISIT = body.ReasonToVisit;
    try {
      const created = await this.reasonToVisitModel.create({
        ReasonToVisit: RTOVISIT,
    
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
      const records = await this.reasonToVisitModel.scope('datesExcluded').findAll();
      return records;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch  Record');
    }
  }




  async findOne(id: number) {
    const aRecord = await this.reasonToVisitModel.findOne({where:{id:id}});
    if (!aRecord) {
      throw new NotFoundException(`Recrod with ID ${id} not found`);
    }else{
      return aRecord
  }
  }



  async update(id: number, body: UpdateReasonToVisitDto) {
      const getRecord = await this.findOne(id)
      const updatedOne = await getRecord.update({
        ReasonToVisit: body.ReasonToVisit,

      })
    return {status: true, updatedOne} 
  }







  async remove(id: number) {
    try {
      const deletedRows = await this.reasonToVisitModel.destroy({ where: { id } });
      if (deletedRows === 0) {
        throw new NotFoundException(`Record with ID ${id} not found`);
      }
    } catch (error) {

      const recrodToBeDelted  = await this.reasonToVisitModel.scope('includeAssociations').findByPk(id)
      const PPs = recrodToBeDelted.PPs
      const CPs = recrodToBeDelted.CPs
      const RPs = recrodToBeDelted.RPs

      return {PPs,CPs,RPs}
      
    }
  
  }





    
}
