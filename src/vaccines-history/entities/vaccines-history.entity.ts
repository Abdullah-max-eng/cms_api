import { Table, Column, ForeignKey, Model, BelongsTo, Scopes } from "sequelize-typescript";
import { ReproductivePatient } from "src/reproductive-patients/entities/reproductive-patient.entity";
import { Vaccine } from "src/vaccines/entities/vaccine.entity";



@Scopes(() => ({
    withVaccine: {
        include:[{ model: Vaccine, as: 'vaccine' }]
    }
}))




@Table
export class VaccinesHistory extends Model {


    @Column({allowNull:false})
    firstDoseDate: string



    @Column({allowNull:false})
    NumberofTakenDoses: number




    @Column({ defaultValue: false })
    vaccinationStatus: boolean;



    @Column({allowNull: true})
    comments: string;




    @ForeignKey(() => Vaccine)
    @Column({ allowNull: false })
    vaccineId: number;
    @BelongsTo(() => Vaccine)
    vaccine: Vaccine;








    // Different Thype os patients

    @ForeignKey(() => ReproductivePatient)
    @Column({ allowNull: false })
    ReproductivePatientID: number;
    @BelongsTo(() => ReproductivePatient)
    ReproductivePatient: ReproductivePatient;








    // @ForeignKey(() => Drug)
    // @Column({ allowNull: false })
    // drugID: number;
    // @BelongsTo(() => Drug)
    // drug: Drug;



    // @ForeignKey(() => Drug)
    // @Column({ allowNull: false })
    // drugID: number;
    // @BelongsTo(() => Drug)
    // drug: Drug;





}
