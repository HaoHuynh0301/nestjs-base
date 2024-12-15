import { Post, Controller, Get, Injectable } from '@nestjs/common';
import { MailingService } from './mailing.service';

@Injectable()
@Controller('mailing')
export class MailingController {
	constructor(private readonly mailingService: MailingService) {}

	@Get()
	async sendOne() {
		await this.mailingService.send({
			to: 'theanh21032304@gmail.com',
			subject: 'Test email',
			text: 'This is a test email',
			html: '<b>This is a test email</b>',
		})

		return {
			message: 'Email sent successfully!',
		}
	}
}