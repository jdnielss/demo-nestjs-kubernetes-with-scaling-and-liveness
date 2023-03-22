import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommunityBranchEntity } from './model/community-branch.entity';
import { EmployeeEntity } from './model/employee.entity';
import { User } from './model/user.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeeEntity, CommunityBranchEntity, User]),
  ],
  exports: [TypeOrmModule],
})
export class UsersModule {}
