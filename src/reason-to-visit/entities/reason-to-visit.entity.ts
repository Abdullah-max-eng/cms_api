import { Model, Table, Column } from "sequelize-typescript";
@Table
export class ReasonToVisit extends Model {
    @Column({allowNull:false})
    ReasonToVisit: string

}
