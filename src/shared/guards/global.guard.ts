import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
@Injectable()
export class GlobalGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  logger = new Logger('GlobalGuard');
 canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    try {
      const token = this.extractTokenFromHeader(request);
      // const isVerified = this.jwtService.verifyAsync(token);
      return true
    } catch (err) {
      return false;
    }
  }
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
