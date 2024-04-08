import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
  Logger
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class VerifyTokenMiddleware implements NestMiddleware {
    logger = new Logger('VerifyTokenMiddleware')
  use(req: any, res: any, next: NextFunction) {
    try {
      const token = req.headers.authorization.split(' ')[1] || undefined;
      if(token){
        next()
      }
    } catch {
        throw new UnauthorizedException('NO_ACCESS_TOKEN')
    }

  }
}
