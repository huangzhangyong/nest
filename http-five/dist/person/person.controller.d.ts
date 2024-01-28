/// <reference types="multer" />
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
export declare class PersonController {
    private readonly personService;
    constructor(personService: PersonService);
    create(createPersonDto: CreatePersonDto): string;
    findAll(): string;
    queryAll(name: string): {
        name: string;
    };
    findOne(id: string): string;
    update(id: string, updatePersonDto: UpdatePersonDto): string;
    remove(id: string): string;
    body2(createPersonDto: CreatePersonDto, files: Array<Express.Multer.File>): string;
}
