import { Module } from '@nestjs/common';
import { PersonModule } from './person/person.module';
import { CitizensModule } from './citizens/citizens.module';

@Module({
  imports: [PersonModule, CitizensModule]
})
export class CitizensRegistrationModule {}
