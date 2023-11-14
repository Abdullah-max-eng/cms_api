import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { InjectModel } from '@nestjs/sequelize';
import { City } from './entities/city.entity';
import { NotFoundError } from 'rxjs';

@Injectable()
export class CitiesService {

  constructor(@InjectModel(City) private CityModel: typeof City){}






  async getOne(id:number){
    const city  = this.CityModel.scope({method:["finOne", id]}).findOne()
    if(city){
      return city
    }else{
      throw new NotFoundException("City with this Id Not found")
    }
  }




  async checkifCityExists(cityname:string, countryname: string){
    const city  = await this.CityModel.scope({method:["checkifExists", cityname, countryname]}).findOne()
    if(city){
      return true 
    }else{
      return false
    }
  }




  async create(body: CreateCityDto) {
    const cityName = body.cityname;
    const countyname = body.countryName
    const exist =  await this.checkifCityExists(cityName, countyname);
    if(exist){
      return "City Already exsits in the system"
    }else{
      const cityCreated = await this.CityModel.create({cityName:cityName,country:countyname})
      return {status: true, cityCreated};
    }

  }




  
  async findAll() {
    const findAllCities = await this.CityModel.findAll()
    return findAllCities;
  }






  async findOne(id:number){
    const city  =await  this.CityModel.scope({method:["finOne", id]}).findOne()
    if(city){
      return city
    }else{
      throw new NotFoundException("City with this Id Not found")
    }
  }





 async  update(id: number, body: UpdateCityDto) {
    const exinting = await this.getOne(id);
    const updatedOne = await exinting.update({
      country: body.countryName,
      cityName: body.cityname

    })
    return {status: true, updatedOne};
  }




  async remove(id: number) {
    const existingOne = await this.getOne(id);
    const deltedOne =  existingOne.destroy()
    return {status: true};
  }




}
