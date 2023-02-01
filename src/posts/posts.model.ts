import { Column, DataType, Model, Table, BelongsToMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import {ApiProperty} from '@nestjs/swagger';

import { Role } from "src/roles/roles.model";
import { User } from "src/users/users.model";
// import { PostRoles } from "src/roles/post-roles.model";

interface PostCreationAttrs {
    title: string;
    content: string;
    userId: number;
    image: string;
};

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'First post', description: 'Название поста (записи)'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({example: 'какой-то текст', description: 'Содержание поста'})
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ApiProperty({example: 'image.jpg', description: 'Название картинки'})
    @Column({type: DataType.STRING})
    image: string;

    @ApiProperty({example: '1', description: 'id пользователя'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;
    
    @BelongsTo(() => User)
    author: User
};