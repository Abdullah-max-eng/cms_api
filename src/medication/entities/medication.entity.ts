import { Model, Table, Column, ForeignKey, BelongsTo, Scopes } from "sequelize-typescript";
import { ChildrenPatient } from "src/children-patients/entities/children-patient.entity";
import { Drug } from "src/drugs/entities/drug.entity";
import { PublicPatient } from "src/public-patients/entities/public-patient.entity";
import { ReproductivePatient } from "src/reproductive-patients/entities/reproductive-patient.entity";


@Scopes(() => ({
                withDrug: {
                include: [{ model: Drug, as: 'drug' }],
                },


        forPublicPatient: (publicPatientId: number) => ({
          where: { PublicPatientID: publicPatientId },
        }),


        forRP: (RPID: number) => ({
          where: { ReproductivePatientID: RPID },
        }),


        forCP: (CPID: number) => ({
          where: { ChildrenPatientID: CPID },
        }),


      


}))










@Table
export class Medication extends Model {


    @Column({allowNull:true})
    startDate: string 



    @Column({allowNull:true})
    endDate: string 



    @ForeignKey(() => Drug)
    @Column({ allowNull: false })
    drugID: number;
    @BelongsTo(() => Drug)
    drug: Drug;







// Different Thype os patients

    @ForeignKey(() => ReproductivePatient)
    @Column({ allowNull: true })
    ReproductivePatientID: number;
    @BelongsTo(() => ReproductivePatient)
    reproductivePatient: ReproductivePatient;


    

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
