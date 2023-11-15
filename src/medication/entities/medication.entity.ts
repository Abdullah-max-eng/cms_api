import { Model, Table, Column, ForeignKey, BelongsTo, Scopes } from "sequelize-typescript";
import { Drug } from "src/drugs/entities/drug.entity";


@Scopes(() => ({
    withDrug: {
      include: [{ model: Drug, as: 'drug' }],
    },


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

    // @ForeignKey(() => Drug)
    // @Column({ allowNull: false })
    // drugID: number;
    // @BelongsTo(() => Drug)
    // drug: Drug;




    // @ForeignKey(() => Drug)
    // @Column({ allowNull: false })
    // drugID: number;
    // @BelongsTo(() => Drug)
    // drug: Drug;



    // @ForeignKey(() => Drug)
    // @Column({ allowNull: false })
    // drugID: number;
    // @BelongsTo(() => Drug)
    // drug: Drug;



}
