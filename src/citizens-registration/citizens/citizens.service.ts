import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from '../person/entities/person.entity';
import { CreateCitizenDto } from './dto/create-citizen.dto';
import { UpdateCitizenDto } from './dto/update-citizen.dto';
import { Citizen } from './entities/citizen.entity';

@Injectable()
export class CitizensService {

  constructor(
    @InjectRepository(Citizen)
    private citizenRepository: Repository<Citizen>,

    @InjectRepository(Person)
    private personRepository: Repository<Person>
  ) { }

  async create(createCitizenDto: CreateCitizenDto) {
    //return 'This action adds a new citizen';
    const newCitizen = this.citizenRepository.create(createCitizenDto);
    //ideally, below should be wrapped in a transaction so that it can roll back if there is error in any of the stages.
    if (createCitizenDto.Person) {
      const newPerson = this.personRepository.create(createCitizenDto.Person);
      const person: Person = await this.personRepository.save(newPerson);
      newCitizen.person = person;
    }
    return this.citizenRepository.save(newCitizen)
  }

  async findAll() {
    //return `This action returns all Citizen`;
    return await this.citizenRepository.find({ relations: ['person'] });
  }

  async findOne(id: number) {
    //return `This action returns a #${id} citizen`;
    return await this.citizenRepository.findOne(id);
  }

  async update(id: number, updateCitizenDto: UpdateCitizenDto) {
    //return `This action updates a #${id} citizen`;
    return await this.citizenRepository.update(id, updateCitizenDto);
  }

  async remove(id: number) {
    //return `This action removes a #${id} citizen`;
    return await this.citizenRepository.delete(id);
  }

  /* Work on relationships */
  async setPersonByid(citizenId: number, personId: number) {
    try {
      return await this.citizenRepository.createQueryBuilder()
        .relation(Citizen, "person")
        .of(citizenId)
        .set(personId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting person for citizen: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetPersonById(citizenId: number) {
    try {
      return await this.citizenRepository.createQueryBuilder()
        .relation(Citizen, "person")
        .of(citizenId)
        .set(null)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting person for citizen: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}