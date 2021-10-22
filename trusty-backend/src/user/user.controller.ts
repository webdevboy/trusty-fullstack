import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
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
  };

  @Get()
  getUser(): IUser {
    return this.user;
  }

  @Post()
  updateUser(@Body('user') user: IUser): IUser {
    this.user = {
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email || '',
      phone: user.phone || '',
      avatarUrl: user.avatarUrl || '',
    };
    return user;
  }
}
