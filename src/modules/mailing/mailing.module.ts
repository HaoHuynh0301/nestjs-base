import { Module } from '@nestjs/common';
import { MailingController } from './mailing.controller';
import { MailingService } from './mailing.service';
import { MailerModule } from '@nestjs-modules/mailer';
import {
    AppEnv
} from '../../common/enum/env'

@Module({
	imports: [
		MailerModule.forRoot({
			transport: {
				host: 'smtp.gmail.com',
				port: 587,
				secure: false,
				auth: {
					user: AppEnv.GMAIL_ACCOUNT,
					pass: AppEnv.GMAIL_APP_PASSWORD,
				},
			},
			defaults: {
				from: `"No Reply" <${AppEnv.GMAIL_ACCOUNT}>`,
			},
		}),
	],
	controllers: [MailingController],
	providers: [MailingService],
})
export class MailingModule {}