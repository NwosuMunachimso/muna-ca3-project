import { CreatePersonDto } from "src/citizens-registration/person/dto/create-person.dto";

export class CreateCitizenDto {
readonly bankVerNo: string;
readonly mobileNumber: string;
readonly nationalIdentificationNumber: string;
readonly Person: CreatePersonDto; //In case you want to create a person along with citizen
}
