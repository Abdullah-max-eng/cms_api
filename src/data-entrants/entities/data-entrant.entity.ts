import { BelongsTo, Column, ForeignKey, Model, Scopes, Table} from "sequelize-typescript";
import { Clinic } from "src/clinics/entities/clinic.entity";



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





    

    
    @ForeignKey(() => Clinic)
    @Column({ allowNull: false })
    clinicId: number;

    @BelongsTo(() => Clinic)
    clinic: Clinic;








}




