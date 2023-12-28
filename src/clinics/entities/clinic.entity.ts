import { Scope } from "@nestjs/common";
import { IsOptional } from "class-validator";
import { Table, Column, Model, NotNull, AllowNull, ForeignKey, BelongsTo, HasMany, Scopes } from "sequelize-typescript";
import { ChildrenPatient } from "src/children-patients/entities/children-patient.entity";
import { City } from "src/cities/entities/city.entity";
import { DataEntrant } from "src/data-entrants/entities/data-entrant.entity";
import { Fee } from "src/fees/entities/fee.entity";
import { PublicPatient } from "src/public-patients/entities/public-patient.entity";
import { ReproductivePatient } from "src/reproductive-patients/entities/reproductive-patient.entity";




@Scopes(() => ({
    findOne: (id: number) => ({ where: { id: id } }),
    withAssociations: {
        include: [
            { model: DataEntrant, attributes:['id','username','email']  },
            { model: PublicPatient, attributes:['id','name','DOB','sex'], include:[{model:Fee, attributes:['PayableFee']}] },
            { model: ReproductivePatient, attributes:['id','name','DOB'], include:[{model:Fee, attributes:['PayableFee']}] },
            { model: ChildrenPatient, attributes:['id','name','DOB','sex'], include:[{model:Fee, attributes:['PayableFee']}] },
        ],
    },
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
    @HasMany(() => PublicPatient)
    PublicPatients: PublicPatient[];



    @IsOptional()
    @HasMany(() => ReproductivePatient)
    ReproductivePatients: ReproductivePatient[];






    @IsOptional()
    @HasMany(() => ChildrenPatient)
    ChildrensPateints: ChildrenPatient[];







}
