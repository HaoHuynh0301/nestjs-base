import { MiddlewareConsumer, Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import {
  AppEnv
} from './common/enum/env'
import { MailingModule } from './modules/mailing/mailing.module';
import {
  PrismaModule
} from './prisma/prisma.module';
import {
  queueConfig
} from './common/queue/queue.config'

@Module({
  imports: [
    MailingModule,
    PrismaModule,
    queueConfig,
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
