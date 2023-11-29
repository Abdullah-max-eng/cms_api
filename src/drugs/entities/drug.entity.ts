import { Table, Model, Column, Scopes } from "sequelize-typescript";


@Scopes(() => ({
    datesExcluded: {
        attributes:{exclude: ['createdAt' ,'updatedAt']}
    }
}))



@Table
export class Drug extends Model {

    @Column({allowNull: false})
    BrandName: string


    @Column({allowNull: true})
    strength: string

    
    @Column({allowNull: true})
    presentation: string


    
    @Column({allowNull: false})
    form: string


    
    @Column({allowNull: false})
    price: string

    
    @Column({allowNull: false})
    code: number












}
