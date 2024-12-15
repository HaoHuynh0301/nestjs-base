import { MiddlewareConsumer, Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import {
  AppEnv
} from './common/enum/env'
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MailingModule } from './modules/mailing/mailing.module';
import {
  PrismaModule 
} from './prisma/prisma.module'

@Module({
  imports: [
    MailingModule,
    PrismaModule,
    CacheModule.register({
      isGlobal: true,
      host: AppEnv.REDIS_HOST,
      port: AppEnv.REDIS_PORT,
      no_ready_check: AppEnv.NODE_ENV === 'production',
    }),
  ],
  providers: [
  ],
  exports: [],
})
export class AppModule { }
