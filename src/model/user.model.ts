import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';
@Entity('users')
export class User {
  @PrimaryColumn()
  @Generated('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
