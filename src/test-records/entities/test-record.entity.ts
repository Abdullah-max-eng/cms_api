import { Model, ForeignKey, Column, BelongsTo, Table, Validate, HasOne, Scopes } from "sequelize-typescript";
import { PublicPatient } from "src/public-patients/entities/public-patient.entity";
import { ReproductivePatient } from "src/reproductive-patients/entities/reproductive-patient.entity";
import { ChildrenPatient } from "src/children-patients/entities/children-patient.entity";
import { TestResult } from "src/test-results/entities/test-result.entity";

@Scopes(() => ({

    forPublicPatient: (publicPatientId: number) => ({
      where: { PublicPatientID: publicPatientId },
    }),

    withResult: {
      include:{model:TestResult, attributes:{exclude:['updatedAt']}}
    },



    FindByID: (testRecordID: number) => ({
      where: { id: testRecordID },
  
    }),


  }))
  






@Table
export class TestRecord extends Model {

    @Column({ allowNull: true})
    testName: string;






    @ForeignKey(() => PublicPatient)
    @Column({ allowNull: true })
    PublicPatientID: number;
    @BelongsTo(() => PublicPatient)
    PublicPatient: PublicPatient;




    @ForeignKey(() => ReproductivePatient)
    @Column({ allowNull: true })
    ReproductivePatientID: number;
    @BelongsTo(() => ReproductivePatient)
    ReproductivePatient: ReproductivePatient;




    @ForeignKey(() => ChildrenPatient)
    @Column({ allowNull: true })
    ChildrenPatientID: number;
    @BelongsTo(() => ChildrenPatient)
    ChildrenPatient: ChildrenPatient;




    @HasOne(() => TestResult)
    TestResult: TestResult;
    






}
