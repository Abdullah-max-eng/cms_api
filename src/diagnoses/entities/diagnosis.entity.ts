import { Model, Table, Column, ForeignKey, BelongsTo, Scopes } from "sequelize-typescript";


@Table
export class Diagnosis extends Model {

    @Column({allowNull:false})
    diagnoses: string





}
