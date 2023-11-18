import { Model, Table, Column, BelongsTo, ForeignKey, Default } from "sequelize-typescript";
import { PublicPatient } from "src/public-patients/entities/public-patient.entity";
import { ReproductivePatient } from "src/reproductive-patients/entities/reproductive-patient.entity";

@Table
export class Fee extends Model {
  @Column({ allowNull: false })
  PayableFee: number;

  @Column({ allowNull: false })
  collectedFee: number;

  @Column({ allowNull: true })
  get debtAmount(): number {
    return this.PayableFee - this.collectedFee;
  }



  
  
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






  




// Children  Health Patients
//   @ForeignKey(() => ReproductivePatient)
//   @Column({ allowNull: false })
//   ReproductivePatientID: number;
//   @BelongsTo(() => ReproductivePatient)
//   reproductivePatient: ReproductivePatient;

}
