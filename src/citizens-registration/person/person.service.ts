import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  constructor(
    //inject person repository for use here in PersonService as if it is part of the class
    @InjectRepository(Person)
    private personRepository: Repository<Person>
    ){}
    async create(createPersonDto: CreatePersonDto) {
      const newPerson: Person = this.personRepository.create(createPersonDto)
      return await this.personRepository.save(newPerson);
    //return 'This action adds a new person';
    }
    async findAll() {
    //return `This action returns all person`;
      return await this.personRepository.find();
    }

    async findOne(id: number) {
    //return `This action returns a #${id} person`;
      return await this.personRepository.findOne(id);
    }
    async update(id: number, updatePersonDto:
    UpdatePersonDto) {
    //return `This action updates a #${id} person`;
    return await this.personRepository.update(id,updatePersonDto);
    }
    async remove(id: number) {
    //return `This action removes a #${id} person`;
      return await this.personRepository.delete(id);
    }
    }