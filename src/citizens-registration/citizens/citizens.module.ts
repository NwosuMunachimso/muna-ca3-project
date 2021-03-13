import { Module } from '@nestjs/common';
import { CitizensService } from './citizens.service';
import { CitizensController } from './citizens.controller';
import { Citizen } from './entities/citizen.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Person } from '../person/entities/person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Citizen, Person])],
  controllers: [CitizensController],
  providers: [CitizensService]
})
export class CitizensModule {}