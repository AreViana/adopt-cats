import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { CatsService } from '../cats.service';

@Injectable()
export class TokenGuard implements CanActivate {
  constructor(private catService: CatsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.token;
    const cat = await this.catService.findOne(request.params.id);
    return cat.code === token;
  }
}
