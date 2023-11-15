import { Table, Model, Column } from "sequelize-typescript";

@Table
export class Vaccine extends Model {
  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  type: string;

  @Column({ allowNull: false })
  doses: number;


  @Column({ allowNull: true })
  price: string;
}
