import { Table, Model, Column } from "sequelize-typescript";

@Table
export class Vaccine extends Model {
  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: true })
  type: string;

  @Column({ allowNull: true })
  doses: number;


  @Column({ allowNull: true })
  price: string;
}
