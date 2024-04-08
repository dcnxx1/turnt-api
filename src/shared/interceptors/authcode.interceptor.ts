import {Injectable, NestInterceptor, ExecutionContext, CallHandler} from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'
import { Observable } from 'rxjs'
import {map} from 'rxjs/operators'

@Injectable()
export class AuthCodeInterceptor implements NestInterceptor{
    constructor(private jwtService: JwtService, private readonly cfg: ConfigService){}

    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle().pipe(
           map((data: boolean) => {
            if(data == true) {
               const signedToken = this.jwtService.sign(this.cfg.get('SECRET_ACCESS_CODE') || process.env.SECRET_ACCESS_CODE)
        
               const refreshToken = this.jwtService.sign({something: 'lal'}, {expiresIn: '1s'})
                return {
                    token: signedToken,
                    refreshToken: refreshToken,
                    userId: 'GOGO',
                    role: 'User'
                }
            }
           })
        )
    }
}