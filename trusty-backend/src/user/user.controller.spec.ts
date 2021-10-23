import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  describe('getUser', () => {
    it('should return user', () => {
      controller.user.firstName = 'TEST FIRSTNAME';
      const user = controller.getUser();
      expect(user.firstName).toBe('TEST FIRSTNAME');
    });
  });

  describe('updateUser', () => {
    it('should update and return user', () => {
      const user = {
        firstName: 'Test FIRST NAME',
        lastName: 'Test',
        email: 'test@test.com',
        phone: '123456789',
        avatarUrl: 'https://i.pravatar.cc/300',
      };
      const upadtedUser = controller.updateUser(user);
      expect(upadtedUser.firstName).toBe(user.firstName);
    });
  });
});
