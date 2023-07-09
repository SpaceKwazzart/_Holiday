import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
  Inject,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { USER_SERVICE } from 'src/shared/constants';
import { IUserService } from '../service/service.interface';

@Injectable()
export class DoesUserExist implements CanActivate {
  constructor(
    @Inject(USER_SERVICE) private readonly userService: IUserService,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  async validateRequest(request) {
    const userEmailExist = await this.userService.findUserByEmail(
      request.body.email,
    );

    const userNameExist = await this.userService.findUserByName(
      request.body.name,
    );

    if (userEmailExist) {
      throw new ForbiddenException('This email already exist');
    }

    if (userNameExist) {
      throw new ForbiddenException('This name already exist');
    }
    return true;
  }
}
