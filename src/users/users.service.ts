import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAccountInput } from './dtos/create-account.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  async createAccount({
    email,
    password,
    role,
  }: CreateAccountInput): Promise<[boolean, string?]> {
    //Check if user exist
    try {
      const exists = await this.users.findOne({ email });
      if (exists) {
        return [
          false,
          'Email is already exist... Login with this email address',
        ];
      }
      await this.users.save(this.users.create({ email, password, role }));
      return [true];
    } catch (error) {
      console.log(error);
      return [false, "Couldn't create account"];
    }
    //Create User and hash Password
  }
}
