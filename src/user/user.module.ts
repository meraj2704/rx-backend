import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Import TypeORM for the User entity
  controllers: [UserController], // Register the controller
  providers: [UserService], // Register the service
})
export class UserModule {}
