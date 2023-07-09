import {
  Controller,
  Inject,
  Post,
  UseGuards,
  Request,
  Body,
} from '@nestjs/common';
import { AUTH_SERVICE } from 'src/shared/constants';
import { AuthService } from '../service/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/users/dto/createUser.dto';
import { DoesUserExist } from '../../users/guards/doesUserExist.guard';

@Controller('auth')
export class AuthController {
  constructor(@Inject(AUTH_SERVICE) private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {
    console.log('Inside login handler');
    return await this.authService.login(req.user);
  }

  @UseGuards(DoesUserExist)
  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto) {
    return await this.authService.createUser(createUserDto);
  }
}
