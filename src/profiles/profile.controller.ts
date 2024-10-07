import { Controller, Post, Get, Param, Patch, Delete, Body } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './create-profile.dto';
import { UpdateProfileDto } from './update-profile.dto';

@Controller('profiles')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  async createProfile(@Body() data: CreateProfileDto) {
    return this.profileService.createProfile(data);
  }

  @Get()
  async getProfile(){
    return this.profileService.getAllProfiles()
  }
 
  @Get(':userId')
  async getProfileByUserId(@Param('userId') userId: string) {
    return this.profileService.getProfileByUserId(+userId);
  }

  @Patch(':userId')
  async updateProfile(@Param('userId') userId: string, @Body() data: UpdateProfileDto) {
    return this.profileService.updateProfile(+userId, data);
  }

  @Delete(':userId')
  async deleteProfile(@Param('userId') userId: string) {
    return this.profileService.deleteProfile(+userId);
  }
}
