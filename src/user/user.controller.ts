import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
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
  create(
    @Body() userData: { userName: string; email: string; password: string },
  ): Promise<User> {
    return this.userService.create(
      userData.userName,
      userData.email,
      userData.password,
    );
  }
}
