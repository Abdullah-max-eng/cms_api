import { Table, Column, ForeignKey, Model, BelongsTo, Scopes } from "sequelize-typescript";
import { ChildrenPatient } from "src/children-patients/entities/children-patient.entity";
import { PublicPatient } from "src/public-patients/entities/public-patient.entity";
import { ReproductivePatient } from "src/reproductive-patients/entities/reproductive-patient.entity";
import { Vaccine } from "src/vaccines/entities/vaccine.entity";



@Scopes(() => ({
    withVaccine: {
        include:[{ model: Vaccine, as: 'vaccine' }]
    },


    forPublicPatient: (publicPatientId: number) => ({
        where: { PublicPatientID: publicPatientId },
    }),


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
    @Column({ allowNull: true })
    ReproductivePatientID: number;
    @BelongsTo(() => ReproductivePatient)
    ReproductivePatient: ReproductivePatient;



    @ForeignKey(() => PublicPatient)
    @Column({ allowNull: true })
    PublicPatientID: number;
    @BelongsTo(() => PublicPatient)
    PublicPatient: PublicPatient;




    @ForeignKey(() => ChildrenPatient)
    @Column({ allowNull: true })
    ChildrenPatientID: number;
    @BelongsTo(() => ChildrenPatient)
    ChildrenPatient: ChildrenPatient;





}
