import { Scope } from "@nestjs/common";
import { IsOptional } from "class-validator";
import { Table, Column, Model, NotNull, AllowNull, ForeignKey, BelongsTo, HasMany, Scopes } from "sequelize-typescript";
import { City } from "src/cities/entities/city.entity";
import { DataEntrant } from "src/data-entrants/entities/data-entrant.entity";
import { ReproductivePatient } from "src/reproductive-patients/entities/reproductive-patient.entity";




@Scopes(() => ({
    finOne: (id:number) => ({where:{id:id}}) 
}))





@Table
export class Clinic extends Model {



    @Column({allowNull:false})
    clinicName:string





    @ForeignKey(() => City)
    @Column({ allowNull: false })
    cityId: number;
    @BelongsTo(() => City)
    city: City;






    @IsOptional()
    @HasMany(()=> DataEntrant)
    DataEntrants: DataEntrant[];




    @IsOptional()
    @HasMany(() => ReproductivePatient)
    ReproductivePatient: ReproductivePatient[];


    //For Children
    // @IsOptional()
    // @HasMany(() => ReproductivePatient)
    // ReproductivePatient: ReproductivePatient[];

    //For Public health
    // @IsOptional()
    // @HasMany(() => ReproductivePatient)
    // ReproductivePatient: ReproductivePatient[];







}
