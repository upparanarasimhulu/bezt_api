import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async createUser(data: CreateUserDto) {
    return await prisma.user.create({ data });
  }

  async getAllUsers() {
    return await prisma.user.findMany({ include: { profile: true } });
  }

  async getUserById(id: number) {
    const user = await prisma.user.findUnique({ where: { id }, include: { profile: true } });
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  async updateUser(id: number, data: UpdateUserDto) {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return await prisma.user.update({ where: { id }, data });
  }

  async deleteUser(id: number) {
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('User not found');
    return await prisma.user.delete({ where: { id } });
  }
}
