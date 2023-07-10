import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) { }

    @Post()
    @ApiCreatedResponse({ type: UserEntity, isArray: false })
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Post(":id")
    @ApiCreatedResponse({ type: UserEntity, isArray: false })
    updaete(@Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(updateUserDto);
    }

}
