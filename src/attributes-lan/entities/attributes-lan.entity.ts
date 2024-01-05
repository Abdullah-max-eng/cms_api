import { Model, Table, Column, Scopes } from "sequelize-typescript";

@Scopes(() => ({
    NoDates:{attributes:{exclude:['createdAt','updatedAt']}}
}))


@Table
export class AttributesLan extends Model {

    @Column({allowNull:false})
    name: string

}
