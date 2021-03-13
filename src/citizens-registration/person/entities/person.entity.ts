import { Citizen } from "../../../citizens-registration/citizens/entities/citizen.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Person{

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;

    @Column({nullable: true})
    middleName: string;
  
    @Column()
    lastName: string;

    @Column({nullable: true})
    countryOfBirth: string;

    @Column({nullable: true})
    stateOfBirth: string;

    @Column({nullable: true})
    townOfBirth: string;

    @Column({nullable: true})
    dateOfBirth: Date;

    @Column({nullable: true})
    nationality: string

    @Column({nullable: true})
    residenceAddress: string

    @Column({nullable: true})
    profession: string
  
    @Column({ default: true })
    isActive: boolean;

    @OneToOne(type => Citizen, citizen => citizen.person)
    citizen: Citizen;

}