import { Controller, Post, Body, UseGuards, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('')
  @UseGuards(LocalAuthGuard)
  async login(@Body() user: any) {
    return this.authService.login(user.email);
  }
}
