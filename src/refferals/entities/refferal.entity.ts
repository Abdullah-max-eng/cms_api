import { Model, Table, Column } from "sequelize-typescript";
@Table
export class Refferal extends Model {
    @Column({allowNull:false})
    Refferal: string

}
