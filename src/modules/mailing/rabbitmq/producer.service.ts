import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import amqp, { ChannelWrapper } from 'amqp-connection-manager';
import { Channel } from 'amqplib';
import {
    Queue
} from '../../../common/enum/channel'

export class ProducerService {
    private channelWrapper: ChannelWrapper;
    constructor() {
        const connection = amqp.connect(['amqp://localhost']);
        this.channelWrapper = connection.createChannel({
            setup: (channel: Channel) => {
                return channel.assertQueue(Queue.EMAIL, { durable: true });
            },
        });
    }

    async addToEmailQueue(mail: any) {
        try {
            await this.channelWrapper.sendToQueue(
                Queue.EMAIL,
                Buffer.from(JSON.stringify(mail)),
                {
                    persistent: true,
                },
            );
            Logger.log('Sent To Queue');
        } catch (error) {
            throw new HttpException(
                'Error adding mail to queue',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}