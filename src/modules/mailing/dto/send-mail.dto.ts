import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class sendMailDto {
	@IsString()
	@IsOptional()
	from?: string;

	@IsEmail()
	@IsNotEmpty()
	to: string;

	@IsString()
	@IsNotEmpty()
	subject: string;

	@IsString()
	@IsNotEmpty()
	text: string;

	@IsString()
	@IsNotEmpty()
	html: string;
}