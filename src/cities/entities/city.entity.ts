import { IsOptional } from "class-validator";
import {  HasMany ,AfterCreate, AfterDestroy, Column, Model, Scopes, Table} from "sequelize-typescript";
import { Clinic } from "src/clinics/entities/clinic.entity";




@Table
export class City extends Model {


    @Column({allowNull: false})
    country: string


    @Column({allowNull: false})
    cityName: string


    @IsOptional()
    @HasMany(()=> Clinic)
    clinics: Clinic[];

    


}
