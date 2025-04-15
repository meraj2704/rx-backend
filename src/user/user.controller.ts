import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './user.dto';
@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created',
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(
      createUserDto.userName,
      createUserDto.email,
      createUserDto.password,
    );
  }

  @Get('all-users')
  @ApiOperation({ summary: 'Get All users' })
  @ApiResponse({
    status: 200,
    description: 'Successfully fetched all users.',
  })
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
