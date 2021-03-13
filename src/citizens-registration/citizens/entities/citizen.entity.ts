import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "src/citizens-registration/person/entities/person.entity";

@Entity()
export class Citizen {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nationalIdentificationNumber: string;

    @Column()
    bankVerNo: string;

    @Column({nullable: true})
    mobileNumber: string;

    @JoinColumn()
    @OneToOne(type => Person, person => person.citizen, {cascade:true})
   person: Person;
}