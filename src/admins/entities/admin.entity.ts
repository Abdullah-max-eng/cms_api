import { AfterCreate, AfterDestroy, Column, Model, Scopes, Table} from "sequelize-typescript";



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
