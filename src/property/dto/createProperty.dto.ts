import { IsNumber, IsString } from "class-validator";

export class CreatePropertyDto {
    @IsString()
    name: string;
    @IsString()
    desc: string;
    @IsNumber()
    area: number;
}
