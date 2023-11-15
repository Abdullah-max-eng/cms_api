import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateVaccineDto } from './dto/create-vaccine.dto';
import { UpdateVaccineDto } from './dto/update-vaccine.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Vaccine } from './entities/vaccine.entity';

@Injectable()
export class VaccinesService {
  constructor(@InjectModel(Vaccine) private VaccineModel: typeof Vaccine){}



  async create(body: CreateVaccineDto) {
    const name = body.name;
    const price = body.price;
    const doses = body.doses;
    const type = body.type;
    try {
      const createdVaccine = await this.VaccineModel.create({
        name: name,
        type:  type,
        doses: doses,
        price: price,
   
      });
      return createdVaccine;
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        throw new ConflictException('Vaccine with the given name already exists');
      }
      throw new InternalServerErrorException('Failed to create Vaccine');
    }
  }







  async findAll(){
    try {
      const Vaccines = await this.VaccineModel.findAll();
      return Vaccines;
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch Vaccines');
    }
  }








  async findOne(id: number) {
    const vaccine = await this.VaccineModel.findByPk(id);
    if (!vaccine) {
      throw new NotFoundException(`Vaccine with ID ${id} not found`);
    }else{
      return vaccine
    }

}






async update(id: number, body: UpdateVaccineDto) {
  const vaccine = await this.findOne(id)
  const updatedOne = await vaccine.update({
    name: body.name,
    type:  body.type,
    doses: body.doses,
    price: body.price,

  })
return {status: true, updatedOne}

}








async remove(id: number): Promise<void> {
      try {
        const deletedRows = await this.VaccineModel.destroy({ where: { id } });
        if (deletedRows === 0) {
          throw new NotFoundException(`Vaccine with ID ${id} not found`);
        }
      } catch (error) {
        throw new InternalServerErrorException('Failed to delete Vaccine');
      }
    }





}
