import { Table, Model, Column, ForeignKey, BelongsTo, HasMany } from "sequelize-typescript";
import { AgeGroup } from "src/age-group/entities/age-group.entity";
import { Clinic } from "src/clinics/entities/clinic.entity";
import { DataEntrant } from "src/data-entrants/entities/data-entrant.entity";
import { Fee } from "src/fees/entities/fee.entity";
import { Medication } from "src/medication/entities/medication.entity";
import { ReasonToVisit } from "src/reason-to-visit/entities/reason-to-visit.entity";
import { Refferal } from "src/refferals/entities/refferal.entity";
import { VaccinesHistory } from "src/vaccines-history/entities/vaccines-history.entity";


@Table
export class PublicPatient extends Model {
    
    
    @Column({allowNull:false})
    visitDate: string


    @Column({allowNull:false})
    name: string
    

    @Column({allowNull:false})
    nationality: string


    @Column({allowNull:false})
    address: string



    @Column({allowNull:false})
    DOB: string



         
    // This should be a foreign key
    @ForeignKey(() => AgeGroup)
    @Column({ allowNull: false })
    ageGroupID: number;
    @BelongsTo(() => AgeGroup)
    ageGroup: AgeGroup;



    
    @Column({allowNull:false})
    sex: string

    


    @Column({allowNull:false})
    disability: string



    @Column({allowNull:false})
    reasonOfDisability: string



    @Column({allowNull:false})
    height:  string


    @Column({allowNull:false})
    heightsq:  string



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


    @HasMany(() => VaccinesHistory)
    vaccinationRecords: VaccinesHistory[];
  

    @HasMany(() => Medication)
    medicationRecords: Medication[];


    @Column({allowNull:false})
    servicesIntroduction: string;



    @Column({allowNull:false})
    remarks: string


    
    @HasMany(() => Fee)
    Fees: Fee[];



    
    @ForeignKey(() => Refferal)
    @Column({ allowNull: false })
    RefferalID: number;
    @BelongsTo(() => Refferal)
    refferal: Refferal;





      







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











        







}
