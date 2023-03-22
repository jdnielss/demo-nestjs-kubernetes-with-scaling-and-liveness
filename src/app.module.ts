import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './controller/app.controller';
import { CommunityBranchEntity } from './model/community-branch.entity';
import { EmployeeEntity } from './model/employee.entity';
import { User } from './model/user.model';
import { AppService } from './service/app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: 'root',
      password: process.env.DATABASE_PASSWORD,
      database: 'db_user',
      synchronize: true,
      dropSchema: false,
      autoLoadEntities: true,
    }),
    HttpModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
