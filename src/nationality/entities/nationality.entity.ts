import { Model, Table, Column, NotNull } from "sequelize-typescript";


@Table
export class Nationality extends Model {


    @Column({allowNull: false})
    nationality: string





}
