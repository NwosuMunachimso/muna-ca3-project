import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitizensRegistrationModule } from './citizens-registration/citizens-registration.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(),CitizensRegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
