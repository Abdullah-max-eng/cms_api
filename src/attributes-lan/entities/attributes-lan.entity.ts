import { Model, Table, Column, Scopes } from "sequelize-typescript";

@Scopes(() => ({
    NoDates:{attributes:{exclude:['createdAt','updatedAt']}}
}))


@Table
export class AttributesLan extends Model {




    @Column({allowNull:false})
    prefix: string



    
    @Column({allowNull:false})
    LoginTitle: string


    @Column({allowNull:false})
    ChoosePatientTypeToSearch: string


    @Column({allowNull:false})
    EnterID: string


    @Column({allowNull:false})
    GeneralClinic: string


    
    @Column({allowNull:false})
    ReproductivePatients: string




    @Column({allowNull:false})
    ChildrenPatients: string


    
    @Column({allowNull:false})
    PSB: string




        
    @Column({allowNull:false})
    AddPatient: string




    @Column({allowNull:false})
    Sex: string




    @Column({allowNull:false})
    PhysicianName: string




    @Column({allowNull:false})
    Actions: string


    @Column({allowNull:false})
    PatientName: string


    @Column({allowNull:false})
    Nationality: string



    
    @Column({allowNull:false})
    Address: string




    @Column({allowNull:false})
    DOB: string



    @Column({allowNull:false})
    Disability: string


    
    @Column({allowNull:false})
    ReasonOfDisability: string



        
    @Column({allowNull:false})
    Height: string




    @Column({allowNull:false})
    Weight: string



    @Column({allowNull:false})
    SugarTest: string



    @Column({allowNull:false})
    BloodPressure: string



    @Column({allowNull:false})
    VisitReason: string



    
    @Column({allowNull:false})
    Diagnoses: string



    
    
    @Column({allowNull:false})
    ServiceIntroduction: string




    @Column({allowNull:false})
    Refferal: string




    

    @Column({allowNull:false})
    Remarks: string



    
    @Column({allowNull:false})
    MaritalStatus: string



    @Column({allowNull:false})
    DateOfLasMenstruation: string



    @Column({allowNull:false})
    DateOfLastBirth: string




    @Column({allowNull:false})
    MarriageAge: string


    @Column({allowNull:false})
    NumberOfChildren: string



    @Column({allowNull:false})
    PrevioseAbortion: string




    @Column({allowNull:false})
    WasBirthNormal: string



    @Column({allowNull:false})
    Contraceptives: string




    @Column({allowNull:false})
    IronInspection: string



    @Column({allowNull:false})
    PatientManagementPortal: string



    @Column({allowNull:false})
    TodaysDate: string





}
