import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity({
  database: "users",
  name: "users",
})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    length: 100,
    nullable: false,
    type: "varchar",
  })
  name: string

  @Column({
    length: 255,
    unique: true,
    nullable: false,
    type: "varchar",
  })
  email: string

  @Column({
    type: "timestamp",
    name: "created_at"
  })
  createdAt: Date
}