import {
    Get,
    Controller,
    Injectable,
    Post,
    Patch,
    Delete
} from '@nestjs/common';

@Injectable()
@Controller('api/users')
export class UsersController {
    constructor() { }

    @Post()
    async create() { }

    @Get()
    async findAll() { }

    @Get(':id')
    async findOne() { }

    @Patch(':id')
    async update() { }

    @Delete(':id')
    async remove() { }
}