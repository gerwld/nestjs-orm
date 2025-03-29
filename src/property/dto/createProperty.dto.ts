import { IsNumber, IsPositive, IsString, Length, MinLength } from "class-validator";

export class CreatePropertyDto {
    @IsString()
    @Length(2, 10, {message: "custom message"})
    name: string;
    @IsString()
    @Length(2, 10, {groups: ["create"]})
    @Length(1, 15, {groups: ["update"]})
    desc: string;
    @IsNumber()
    @IsPositive()
    area: number;
}
