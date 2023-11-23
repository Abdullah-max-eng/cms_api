import { Model, Table, Column, Scopes } from "sequelize-typescript";

@Scopes(() => ({
    datesExcluded: {
        attributes:{exclude: ['createdAt' ,'updatedAt']}
    }
}))


@Table
export class Refferal extends Model {
    @Column({allowNull:false})
    Refferal: string

}
