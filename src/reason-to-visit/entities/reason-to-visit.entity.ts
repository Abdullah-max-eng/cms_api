import { Model, Table, Column, Scopes } from "sequelize-typescript";


@Scopes(() => ({
    datesExcluded: {
        attributes:{exclude: ['createdAt' ,'updatedAt']}
    }
}))





@Table
export class ReasonToVisit extends Model {
    @Column({allowNull:false})
    ReasonToVisit: string

}
