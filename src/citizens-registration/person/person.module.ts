import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonService } from './Person.service';
import { PersonController } from './Person.controller';
import { Person } from './entities/person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Person])],
  controllers: [PersonController],
  providers: [PersonService]
})
export class PersonModule {}
