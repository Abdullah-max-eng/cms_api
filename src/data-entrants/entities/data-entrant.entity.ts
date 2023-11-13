import { Column, Model, Scopes, Table} from "sequelize-typescript";



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




