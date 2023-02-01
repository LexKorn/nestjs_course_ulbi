import {ApiProperty} from '@nestjs/swagger';

export class CreatePostDto {
    @ApiProperty({example: 'First post', description: 'Название поста (записи)'})
    readonly title: string;

    @ApiProperty({example: 'какой-то текст', description: 'Содержание поста'})
    readonly content: string;

    @ApiProperty({example: '1', description: 'id пользователя'})
    readonly userId: number;
};