import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EmployeeEntity } from './employee.entity';

@Entity('community_branches')
export class CommunityBranchEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  name: string;

  @Column()
  addresses: string;

  @Column()
  docCodeOfferingLetter: string;

  @Column()
  delFlag: boolean;

  @Column()
  createdBy: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  updatedBy: string;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  deletedBy: string;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToOne(() => EmployeeEntity, (employee) => employee.communityBranchId)
  employee: EmployeeEntity;
}
