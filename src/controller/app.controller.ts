import { Body, Controller, Get, Ip, Logger, Param, Post } from '@nestjs/common';
import { User } from '../model/user.model';
import { AppService } from '../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private readonly logger = new Logger(AppController.name);

  @Get('/health')
  async health(): Promise<string> {
    this.logger.log('Health Check');
    return 'OK';
  }

  @Get('/exit')
  async exit(): Promise<string> {
    this.logger.error('Exit');
    process.exit(0);
  }

  @Get()
  async list(@Ip() ip: string): Promise<User[]> {
    this.logger.log(`Received Request from IP: ${ip}`);
    return await this.appService.users();
  }

  @Get('/:id')
  async getUser(@Param('id') id: string): Promise<User> {
    return await this.appService.user(id);
  }

  @Post()
  async saveUser(@Body() user: User[]): Promise<User[]> {
    Logger.log('Received Request');
    return await this.appService.save(user);
  }
}
