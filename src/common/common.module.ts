import { HttpModule } from '@nestjs/axios';
import { ClassSerializerInterceptor, Global, Module } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';

import * as Agent from 'agentkeepalive';

import { HTTP_CLIENT } from './constants';
import { HttpClient, PrismaService } from './infra';
import { makeValidationPipe } from './main';

@Global()
@Module({
  imports: [
    HttpModule.register({
      httpAgent: new Agent({
        timeout: 60_000, // active socket keepalive for 60 seconds
        freeSocketTimeout: 30_000, // free socket keepalive for 30 seconds
      }),
      httpsAgent: new Agent.HttpsAgent({
        timeout: 60_000, // active socket keepalive for 60 seconds
        freeSocketTimeout: 30_000, // free socket keepalive for 30 seconds
      }),
    }),
  ],
  providers: [
    PrismaService,
    // Pipes
    {
      provide: APP_PIPE,
      useFactory: makeValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    // Adapters
    { provide: HTTP_CLIENT, useClass: HttpClient },
  ],
  exports: [PrismaService, HTTP_CLIENT],
})
export class CommonModule {}
