import { Model, Column, Table, ForeignKey, HasOne, BelongsTo, HasMany, DataType, Default, Scopes } from "sequelize-typescript";
import { AgeGroup } from "src/age-group/entities/age-group.entity";
import { Clinic } from "src/clinics/entities/clinic.entity";
import { DataEntrant } from "src/data-entrants/entities/data-entrant.entity";
import { Drug } from "src/drugs/entities/drug.entity";
import { Fee } from "src/fees/entities/fee.entity";
import { Medication } from "src/medication/entities/medication.entity";
import { ReasonToVisit } from "src/reason-to-visit/entities/reason-to-visit.entity";
import { Refferal } from "src/refferals/entities/refferal.entity";
import { TestRecord } from "src/test-records/entities/test-record.entity";
import { VaccinesHistory } from "src/vaccines-history/entities/vaccines-history.entity";
import { Vaccine } from "src/vaccines/entities/vaccine.entity";



@Scopes(() => ({
  includeAssociations: {
    include: [
      { model: Fee, attributes:['id','PayableFee', 'collectedFee'] },
      { model: TestRecord, attributes:['id','testName'] },
      
      { 
        model: VaccinesHistory,
        attributes:['vaccineId', 'firstDoseDate', 'numberOfTakenDoses', 'vaccinationStatus','comments','vaccineId'], 
        include: [{ model: Vaccine, attributes: ['id','name', 'type', 'doses'] }],

      },
      {
        model: Medication,
        attributes: [ 'startDate', 'endDate'],
        include: [{ model: Drug }],
      },
    ],
  },
}))





@Table
export class ReproductivePatient extends Model {





        @Default(() => new Date().toISOString().split('T')[0]) // Default to today's date
        @Column({allowNull:false})
        visitDate: string

        @Column({allowNull:false})
        name: string

        @Column({allowNull:false})
        address: string


        @Column({allowNull:false})
        DOB: string


        @Column({allowNull:false})
        Height: string



        @Column({allowNull:false})
        Weight:  string


        @Column({allowNull:false})
        BMI:  string


        
        @Column({allowNull:false})
        MaritalStatus:  string


        @Column({allowNull:false})
        NumberOfChildren:  number


        @Column({allowNull:false})
        PreviouseAbortions:  number


        @Column({allowNull:false})
        DateOfLastBirth:  string


        @Column({allowNull:false})
        NormalBirthStatus:  boolean


        @Column({allowNull:false})
        DateOfLastMenstruation:  string



        

        @Column({allowNull:false})
        marriageAge:  number




        @Column({allowNull:false})
        contraceptives:string



        @Column({allowNull:false})
        IronInspection: string




        @Column({allowNull:false})
          DiabetesScreening: string



          @Column({allowNull:false})
          BloodPressure: string



          @Column({allowNull:false})
          physicianName: string


          
          @Column({allowNull:false})
          servicesIntroduction: string;
          




          @Column({allowNull:false})
          ageGroup: string;



          
          @Column({allowNull:false})
          refferal: string



          
          @Column({allowNull:false})
          diagnoses: string;




      





            @ForeignKey(() => ReasonToVisit)
            @Column({ allowNull: false })
            VisitReasonID: number;
            @BelongsTo(() => ReasonToVisit)
            VisitReason: ReasonToVisit;




            @ForeignKey(() => Clinic)
            @Column({ allowNull: false })
            clinicID: number;
            @BelongsTo(() => Clinic)
            clinic: Clinic;





            @ForeignKey(() => DataEntrant)
            @Column({ allowNull: false })
            DataEntrantID: number;
            @BelongsTo(() => DataEntrant)
            DataEntrant: DataEntrant;





            @HasMany(() => VaccinesHistory)
            vaccinationRecords: VaccinesHistory[];
          

            @HasMany(() => Medication)
            medicationRecords: Medication[];


            @HasMany(() => Fee)
            Fees: Fee[];



            @HasMany(() => TestRecord)
            TestRecords: TestRecord[];



            







}
