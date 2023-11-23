import { Model, Table, Column, Scopes } from "sequelize-typescript";

@Scopes(() => ({
    datesExcluded: {
        attributes:{exclude: ['createdAt' ,'updatedAt']}
    }
}))

@Table
export class AgeGroup extends Model {
    @Column({allowNull:false})
    ageGroup: string

}
