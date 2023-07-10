import {
  Module,
  Inject,
  forwardRef,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { UserController } from './controller/users.controller';
import { usersProviders } from './users.providers';
import {
  AUTH_SERVICE,
  BASIC_COLLECTION_NAME,
  USER_SERVICE,
} from 'src/shared/constants';
import { CollectionModule } from 'src/collections/collections.module';
import { CreateUserDto } from './dto/createUser.dto';
import { AuthModule } from 'src/auth/auth.module';
import { IAuthService } from 'src/auth/service/service.interface';
import { IUserService } from './service/service.interface';
import { AccessStatus } from 'src/shared/types';

@Module({
  controllers: [UserController],
  providers: [...usersProviders],
  imports: [CollectionModule, forwardRef(() => AuthModule)],
  exports: [USER_SERVICE],
})
export class UserModule {
  constructor(
    @Inject(AUTH_SERVICE) private readonly authService: IAuthService,
    @Inject(USER_SERVICE) private readonly userService: IUserService,
  ) {}

  async onModuleInit() {
    const adminData: CreateUserDto = {
      name: process.env.ADMIN_NAME,
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
    };

    const checkUser = await this.userService.findUserByName(adminData.name);
    if (checkUser) {
      console.log('User already exists');
      return Promise.resolve();
    }

    const { user, collection } = await this.authService.createUser(adminData);

    user.isAdmin = true;
    user.isApproved = true;

    collection.name = BASIC_COLLECTION_NAME;
    collection.accessStatus = AccessStatus.Public;

    await user.save();
    await collection.save();
  }
}
