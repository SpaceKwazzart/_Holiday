import { Module, Inject } from '@nestjs/common';
import { UserController } from './controller/users.controller';
import { usersProviders } from './users.providers';
import { USER_SERVICE } from 'src/shared/constants';
import { CollectionModule } from 'src/collections/collections.module';
import { IUserService } from './service/service.interface';
import { CreateUserDto } from './dto/createUser.dto';

@Module({
  controllers: [UserController],
  providers: [...usersProviders],
  imports: [CollectionModule],
  exports: [USER_SERVICE],
})
export class UserModule {
  constructor(
    @Inject(USER_SERVICE) private readonly userService: IUserService,
  ) {}

  async onModuleInit() {
    const adminData: CreateUserDto = {
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    };
    await this.userService.createDefaultAdmin(adminData);
  }
}
