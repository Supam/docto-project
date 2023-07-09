import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { compareSync } from 'bcryptjs';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) { }

  async signIn(email: string, pass: string): Promise<any> {
    if (!email || !pass) throw new BadRequestException();

    const user = await this.usersService.findOne(email);
    if (!user) throw new NotFoundException();

    if (!compareSync(pass, user.password)) {
      throw new UnauthorizedException();
    }

    const paylaod = { sub: user.id, username: user.username };
    return { accessToken: await this.jwtService.signAsync(paylaod) };
  }
}
