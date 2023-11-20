import { Model, Table, Column, NotNull } from "sequelize-typescript";


@Table
export class ServicesIntroduction extends Model {
    @Column({allowNull: false})
    ServiceIntroduction: string

}
