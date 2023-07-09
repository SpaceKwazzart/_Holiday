import { USER_SERVICE } from 'src/shared/constants';
import { HttpException, UseGuards } from '@nestjs/common';
import { Controller, Get, Param, Inject } from '@nestjs/common';
import { IUserService } from '../service/service.interface';
import { AuthGuard } from '@nestjs/passport';
import { UserWithoutPassword } from '../entities/user.interface';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UserController {
  constructor(
    @Inject(USER_SERVICE) private readonly userService: IUserService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getUserByid(@Param('id') id: number): Promise<UserWithoutPassword> {
    try {
      const user = await this.userService.findUserById(id);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...userWithNoPassword } = user['dataValues'];
      return userWithNoPassword;
    } catch (error) {
      throw new HttpException('Bad request', 400);
    }
  }
}
