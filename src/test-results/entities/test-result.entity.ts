
import { Table, Model, Column, ForeignKey, BelongsTo, DataType, Scopes } from "sequelize-typescript";
import { TestRecord } from "src/test-records/entities/test-record.entity";







@Table
export class TestResult extends Model {



       
            @Column({ allowNull: false})
            testResult: string;


            @ForeignKey(() => TestRecord)
            @Column({ allowNull: false, unique: true })
            TestRecordID: number;
            @BelongsTo(() => TestRecord)
            TestRecord: TestRecord;

            




            
}
