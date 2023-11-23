import { Model, Table, Column, NotNull, Scopes } from "sequelize-typescript";


@Scopes(() => ({
    datesExcluded: {
        attributes:{exclude: ['createdAt' ,'updatedAt']}
    }
}))

@Table
export class ServicesIntroduction extends Model {
    @Column({allowNull: false})
    ServiceIntroduction: string

}
