import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	ParseIntPipe,
	HttpStatus,
	Injectable,
	Inject,
	Req,
} from '@nestjs/common'; import { MailingService } from './mailing.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
@Controller('mailing')
export class MailingController {
	constructor(private readonly mailingService: MailingService, @Inject(CACHE_MANAGER) private cacheService: Cache
	) { }

	@Get()
	async sendOne() {

		const cachedValue = await this.cacheService.get(`mailing:sendOne:theanh21032304@gmail.com`);

		if (cachedValue) {
			return {
				message: 'Email already sent!',
			}
		}

		await this.mailingService.send({
			to: 'theanh21032304@gmail.com',
			subject: 'Test email',
			text: 'This is a test email',
			html: '<b>This is a test email</b>',
		})

		await this.cacheService.set(
			`mailing:sendOne:theanh21032304@gmail.com`,
			'1',
			60 * 60 * 24
		)

		return {
			message: 'Email sent successfully!',
		}
	}
}