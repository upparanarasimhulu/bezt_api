import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateProfileDto } from './create-profile.dto';
import { UpdateProfileDto } from './update-profile.dto';

const prisma = new PrismaClient();

@Injectable()
export class ProfileService {
  async createProfile(data: CreateProfileDto) {
    return await prisma.profile.create({ data });
  }

  async getProfileByUserId(userId: number) {
    const profile = await prisma.profile.findUnique({ where: { userId } });
    if (!profile) throw new NotFoundException('Profile not found');
    return profile;
  }

  async updateProfile(userId: number, data: UpdateProfileDto) {
    const profile = await prisma.profile.findUnique({ where: { userId } });
    if (!profile) throw new NotFoundException('Profile not found');
    return await prisma.profile.update({ where: { userId }, data });
  }

  async deleteProfile(userId: number) {
    const profile = await prisma.profile.findUnique({ where: { userId } });
    if (!profile) throw new NotFoundException('Profile not found');
    return await prisma.profile.delete({ where: { userId } });
  }
  async getAllProfiles(): Promise<CreateProfileDto[]> {
    return await prisma.profile.findMany();
  }
}
