import { Model, BeforeSave, Scopes, Table, Column, BelongsTo, ForeignKey, Default } from "sequelize-typescript";
import { ChildrenPatient } from "src/children-patients/entities/children-patient.entity";
import { PublicPatient } from "src/public-patients/entities/public-patient.entity";
import { ReproductivePatient } from "src/reproductive-patients/entities/reproductive-patient.entity";



@Scopes(() => ({
  forPublicPatient: (publicPatientId: number) => ({
    where: { PublicPatientID: publicPatientId },
  }),
}))




@Table
export class Fee extends Model {
 
 
  @Column({ allowNull: false })
  PayableFee: number;

  @Column({ allowNull: false })
  collectedFee: number;



  @Column({ allowNull: true })
  debtAmount: number;



  
  
  @Default(() => new Date().toISOString().split('T')[0]) // Default to today's date
  @Column({ allowNull: false })
  PaymentDate: string;





  @ForeignKey(() => ReproductivePatient)
  @Column({ allowNull: true })
  ReproductivePatientID: number;
  @BelongsTo(() => ReproductivePatient)
  reproductivePatient: ReproductivePatient;




// Public Health Patients
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



  

  @BeforeSave
  static calculateDebtAmount(instance: Fee): void {
    if (instance.PayableFee !== null && instance.collectedFee !== null) {
      instance.debtAmount = instance.PayableFee - instance.collectedFee;
    } else {
      instance.debtAmount = null;
    }
  }




}
