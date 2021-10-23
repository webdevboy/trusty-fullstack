import { Body, Controller, Get, Post } from '@nestjs/common';
import { IUser } from './interfaces';

@Controller('api/user')
export class UserController {
  // FOR TESTING ONLY
  user: IUser = {
    firstName: 'Test',
    lastName: 'Test',
    email: 'test@test.com',
    phone: '123456789',
    avatarUrl: 'https://i.pravatar.cc/300',
    updatedAt: new Date(),
  };

  @Get()
  getUser(): IUser {
    return this.user;
  }

  @Post()
  updateUser(@Body('user') user: IUser): IUser {
    this.user = {
      firstName: user.firstName || this.user.firstName,
      lastName: user.lastName || this.user.lastName,
      email: user.email || this.user.email,
      phone: user.phone || this.user.phone,
      avatarUrl: user.avatarUrl || this.user.avatarUrl,
      updatedAt: user.updatedAt || this.user.updatedAt,
    };
    return this.user;
  }
}
