
import { Model, Table, Column, NotNull } from "sequelize-typescript";


@Table
export class TypesOfTest extends Model {


    @Column({allowNull: false,  unique: true,  })
    testType: string





}
