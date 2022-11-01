import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { UserRoles } from '../user/enums/user.enum';

@Injectable()
export class AdminRoleGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    if (request?.user && request?.user?.role === UserRoles.ADMIN) {
      return true;
    }
    return false;
  }
}
