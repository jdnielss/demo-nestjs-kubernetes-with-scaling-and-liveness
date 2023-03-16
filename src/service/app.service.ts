import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../model/user.model';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async users(): Promise<User[]> {
    const users: User[] = await this.userRepository.find();

    return users;
  }

  async user(id: string): Promise<User> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async save(users: User[]): Promise<User[]> {
    const tempUser = [];
    if (Array.isArray(users)) {
      for (const user of users) {
        const save = await this.userRepository.save(user);
        tempUser.push(save);
      }
    }
    return tempUser;
  }
}
