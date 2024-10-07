import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profiles/profile.module';

@Module({
  imports: [UserModule,ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
