export class CreatePersonDto {
    readonly firstName: string;
    readonly middleName: string;
    readonly lastName: string;
    readonly nationality: string;
    readonly townOfBirth: string;
    readonly dateOfBirth: Date;
    readonly countryOfBirth: string;
    readonly stateOfBirth: string;
    readonly residenceAddress: string;
    readonly profession: string;
    readonly isActive?: boolean;
    }