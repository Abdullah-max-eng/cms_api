import { DataTypes } from "sequelize";
import { Table, Model, Column, ForeignKey, BelongsTo, HasMany, Default, Scopes } from "sequelize-typescript";
import { Clinic } from "src/clinics/entities/clinic.entity";
import { DataEntrant } from "src/data-entrants/entities/data-entrant.entity";
import { Fee } from "src/fees/entities/fee.entity";
import { Medication } from "src/medication/entities/medication.entity";
import { ReasonToVisit } from "src/reason-to-visit/entities/reason-to-visit.entity";
import { VaccinesHistory } from "src/vaccines-history/entities/vaccines-history.entity";
import { TestRecord } from "src/test-records/entities/test-record.entity";
import { Drug } from "src/drugs/entities/drug.entity";
import { Vaccine } from "src/vaccines/entities/vaccine.entity";
import { TestResult } from "src/test-results/entities/test-result.entity";


@Scopes(() => ({
    includeAssociations: {
      include: [
        { model: Fee, attributes:['id','PayableFee', 'collectedFee'] },
        
        {
          model: TestRecord,
          attributes:['id','testName'], 
          include: [{ model: TestResult }],
        
        },
        
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
export class PublicPatient extends Model {
    

    
    @Default(() => new Date().toISOString().split('T')[0]) // Default to today's date
    @Column({allowNull:false})
    visitDate: string


    @Column({allowNull:false})
    name: string
    

    @Column({allowNull:false})
    nationality: string


    @Column({allowNull:false})
    address: string



    @Column({ allowNull: false, type: DataTypes.DATE })
    DOB: Date;
    



        

    @Column({allowNull:false})
    ageGroup: string

    
    @Column({allowNull:false})
    sex: string

    


    @Column({allowNull:false})
    disability: string



    @Column({allowNull:false})
    reasonOfDisability: string



    @Column({allowNull:false})
    height:  string





    @Column({allowNull:false})
    weight:  string


    @Column({allowNull:false})
    BMI:  string


    
    @Column({allowNull:false})
    sugarTest:  string


    @Column({allowNull:false})
    bloodPressure:  string



    @ForeignKey(() => ReasonToVisit)
    @Column({ allowNull: false })
    VisitReasonID: number;
    @BelongsTo(() => ReasonToVisit)
    VisitReason: ReasonToVisit;


    
    @Column({allowNull:false})
    physicianName: string




    @Column({allowNull:false})
    servicesIntroduction: string;



    @Column({allowNull:false})
    diagnoses: string;



    @Column({allowNull:false})
    remarks: string







    @Column({allowNull:false})
    refferal: string






      







    @ForeignKey(() => Clinic)
    @Column({  allowNull: true })
    clinicID: number;
    @BelongsTo(() => Clinic)
    clinic: Clinic;





    @ForeignKey(() => DataEntrant)
    @Column({  allowNull: true })
    DataEntrantID: number;
    @BelongsTo(() => DataEntrant)
    DataEntrant: DataEntrant;







    
    @HasMany(() => Fee)
    Fees: Fee[];

    @HasMany(() => TestRecord)
    TestRecords: TestRecord[];

    
    @HasMany(() => VaccinesHistory)
    vaccinationRecords: VaccinesHistory[];
  

    @HasMany(() => Medication)
    medicationRecords: Medication[];





        







}
