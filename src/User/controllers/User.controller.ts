/* eslint-disable prettier/prettier */
import { Controller, Get, Post } from "@nestjs/common";

@Controller('users')
export class UserController{
    @Get()
    findAll(): string {
        return 'This is All users'
    }
}