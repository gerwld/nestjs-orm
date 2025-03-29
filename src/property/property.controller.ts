import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Controller('property')
export class PropertyController {

    @Get()
    findAll() {
        return "All properties"
    }
    @Get(":id/:slug")
    findOne(@Param("id", ParseIntPipe) id:string, @Param("slug") slug) {
        return id + " " + slug
    }

    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() body: CreatePropertyDto) {
        return body
    }
}
