import { Model, Table, Column, NotNull } from "sequelize-typescript";

@Table
export class AdminsMessage extends Model {


    @Column({allowNull: false})
    message: string





}
