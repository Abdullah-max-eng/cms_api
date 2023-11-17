import { Model, Table, Column } from "sequelize-typescript";



@Table
export class AgeGroup extends Model {
    @Column({allowNull:false})
    ageGroup: string

}
