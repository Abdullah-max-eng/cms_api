import { BelongsTo, Column, ForeignKey, HasMany, Model, Scopes, Table} from "sequelize-typescript";
import { Clinic } from "src/clinics/entities/clinic.entity";
import { ReproductivePatient } from "src/reproductive-patients/entities/reproductive-patient.entity";



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




    @HasMany(() => ReproductivePatient)
    RegisteredPatients: ReproductivePatient[];


    // For two other types of patients

    // @HasMany(() => ReproductivePatient)
    // RegisteredPatients: ReproductivePatient[];


    // @HasMany(() => ReproductivePatient)
    // RegisteredPatients: ReproductivePatient[];








}




