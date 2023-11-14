import { AfterCreate, AfterDestroy, Column, Model, Scopes, Table} from "sequelize-typescript";


@Scopes(()=>({
    findOne: (id:number) => ({where:{id:id}}),
    passExcluded: { attributes: { exclude: ["password", "Hashedrt"] } },
    
}))


@Table
export class Admin extends Model {
  
  
  
    @Column({ allowNull: false })
    username: string


    @Column({ allowNull: false })
    password: string


    @Column({ allowNull: false })
    email: string


    @Column({ allowNull: true })
    Hashedrt: string








}
