import { USER_SERVICE } from 'src/shared/constants';
import { HttpException, UseGuards } from '@nestjs/common';
import { Controller, Get, Param, Inject } from '@nestjs/common';
import { GetUserDto } from '../dto/getUser.dto';
import { IUserService } from '../service/service.interface';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UserController {
  constructor(
    @Inject(USER_SERVICE) private readonly userService: IUserService,
  ) {}

  @Get(':id')
  async getUserByid(@Param('id') id: number) {
    try {
      const user = await this.userService.findUserById(id);
      const dto: GetUserDto = {
        name: user.name,
        email: user.email,
      };
      return dto;
    } catch (error) {
      throw new HttpException('Bad request', 400);
    }
  }
}
