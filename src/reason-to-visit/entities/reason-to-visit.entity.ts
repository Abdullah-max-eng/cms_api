import { Model, Table, Column, Scopes, HasMany } from "sequelize-typescript";
import { ChildrenPatient } from "src/children-patients/entities/children-patient.entity";
import { PublicPatient } from "src/public-patients/entities/public-patient.entity";
import { ReproductivePatient } from "src/reproductive-patients/entities/reproductive-patient.entity";


@Scopes(() => ({
    datesExcluded: {
        attributes:{exclude: ['createdAt' ,'updatedAt']}
    },

    
    includeAssociations: {
        include: [
            { model: PublicPatient, attributes: ['id','name'] },
            { model: ReproductivePatient, attributes: ['id','name'] },
            { model: ChildrenPatient, attributes: ['id','name'] },
        ]
    }


}))





@Table
export class ReasonToVisit extends Model {
    @Column({allowNull:false})
    ReasonToVisit: string



    @HasMany(() => PublicPatient, { foreignKey: "VisitReasonID" })
    PPs: PublicPatient[];
   
    @HasMany(() => ReproductivePatient, { foreignKey: "VisitReasonID" })
    RPs: ReproductivePatient[];

    @HasMany(() => ChildrenPatient, { foreignKey: "VisitReasonID" })
    CPs: ChildrenPatient[];


}
