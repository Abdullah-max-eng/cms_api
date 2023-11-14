import { Column, Model, Scopes, Table} from "sequelize-typescript";

@Scopes(()=>({
    findOne: (id:number) => ({where:{id:id}}),
    passExcluded: { attributes: { exclude: ["password", "Hashedrt"] } },
    
}))


@Table
export class DataEntrant extends Model {
  
  
  
    @Column({ allowNull: false })
    username: string


    @Column({ allowNull: false })
    password: string


    @Column({ allowNull: false })
    email: string


    @Column({ allowNull: true })
    Hashedrt: string








}




