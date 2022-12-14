/* eslint-disable prettier/prettier */
// eslint-disable-next-line @typescript-eslint/no-empty-function

import { Module } from "@nestjs/common/decorators/modules/module.decorator";
import { UserController } from "./controllers/User.controller";

@Module({
    controllers: [UserController]
})

export class UserModule{}