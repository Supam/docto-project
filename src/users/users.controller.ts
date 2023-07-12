import { Body, ClassSerializerInterceptor, Controller, Get, Param, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiCreatedResponse, ApiHeader, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '../auth/auth.guard';


@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) { }
    @UseInterceptors(ClassSerializerInterceptor)
    @Get()
    @UseGuards(AuthGuard)
    @ApiHeader({
        name: 'Authorization',
        description: 'Bearer token auth is required for this route',
    })
    @ApiCreatedResponse({ type: UserEntity, isArray: true })
    findAll() {
        return this.userService.findAll();
    }

    @UseInterceptors(ClassSerializerInterceptor)
    @Get(":id")
    @UseGuards(AuthGuard)
    @ApiHeader({
        name: 'Authorization',
        description: 'Bearer token auth is required for this route',
    })
    @ApiCreatedResponse({ type: UserEntity })
    findOne(@Param() params: any) {
        return this.userService.findOne(+params.id)
    }

    @Post()
    @ApiCreatedResponse({ type: UserEntity })
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Post(":id")
    @UseGuards(AuthGuard)
    @ApiHeader({
        name: 'Authorization',
        description: 'Bearer token auth is required for this route',
    })
    @ApiCreatedResponse({ type: UserEntity })
    update(@Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(updateUserDto);
    }
}
