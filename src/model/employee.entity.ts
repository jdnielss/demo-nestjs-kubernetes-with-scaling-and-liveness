import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CommunityBranchEntity } from './community-branch.entity';

@Entity('employees')
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pn: string;

  @Column()
  fullName: string;

  @Column()
  branchCode: string;

  @Column({ name: 'community_branch_id' })
  communityBranchId: string;

  @Column()
  oranizationId: string;

  @Column()
  job: string;

  @Column()
  accessLevel: string;

  @Column()
  loginTicket: string;

  @Column()
  photo: string;

  @Column()
  fcmTokenApps: string;

  @Column()
  fcmTokenDashboard: string;

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

  @OneToOne(
    () => CommunityBranchEntity,
    (communityBranch) => communityBranch.id,
  )
  @JoinColumn({ name: 'community_branch_id' })
  communityBranch: CommunityBranchEntity;
}
