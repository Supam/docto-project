import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiHeader, ApiHeaders, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) { }

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

    @Get(":id")
    @UseGuards(AuthGuard)
    @ApiHeader({
        name: 'Authorization',
        description: 'Bearer token auth is required for this route',
    })
    @ApiCreatedResponse({ type: UserEntity, isArray: true })
    findOne(@Param() params: any) {
        return this.userService.findOne(+params.id);
    }

    @Post()
    @ApiCreatedResponse({ type: UserEntity, isArray: false })
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @Post(":id")
    @UseGuards(AuthGuard)
    @ApiHeader({
        name: 'Authorization',
        description: 'Bearer token auth is required for this route',
    })
    @ApiCreatedResponse({ type: UserEntity, isArray: false })
    update(@Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(updateUserDto);
    }

}
