import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { sendMailDto } from './dto/send-mail.dto';
// import logger from 'src/common/loggers/wistom.logger';

@Injectable()
export class MailingService {
    constructor(private readonly mailerService: MailerService) { }

    async send(data: sendMailDto): Promise<void> {
        try {
            await this.mailerService.sendMail(data);
        } catch (error) {
            console.log(error);
        }
    }
}