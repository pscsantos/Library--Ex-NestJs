import { Injectable, MiddlewareFunction, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  async resolve(name: string): Promise<MiddlewareFunction> {   
    return async (req, res, next) => {      
      console.log(`[${name}] Request......`);
      next();
    }
  }
}
