import { BullModule } from '@nestjs/bullmq';
import {
    AppEnv
} from '../enum/env'

export const queueConfig = BullModule.forRoot({
    connection: {
        host: AppEnv.REDIS_HOST,
        port: AppEnv.REDIS_PORT,
    },
    defaultJobOptions: {
        removeOnComplete: 1000,
        removeOnFail: 5000,
        attempts: 3,
    },
});