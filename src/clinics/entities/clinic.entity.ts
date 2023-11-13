import { Table, Column, Model, NotNull, AllowNull, ForeignKey, BelongsTo } from "sequelize-typescript";
import { City } from "src/cities/entities/city.entity";
@Table
export class Clinic extends Model {

    @Column({allowNull:false})
    clinicName:string



    @ForeignKey(() => City)
    @Column({ allowNull: false })
    cityId: number;

    @BelongsTo(() => City)
    city: City;


}
