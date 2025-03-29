import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Controller('property')
export class PropertyController {

    @Get()
    findAll() {
        return "All properties"
    }
    @Get(":id/:slug")
    findOne(@Param("id", ParseIntPipe) id: string, @Param("slug") slug) {
        return id + " " + slug
    }

    @Post()
    @UsePipes(
        new ValidationPipe(
            {
                whitelist: true,
                forbidNonWhitelisted: false,
                groups: ["create"],
                always: true
            }
        )
    )
    create(@Body() body: CreatePropertyDto) {
        return body
    }


    @Patch()
    update(
        @Body(new ValidationPipe({
            whitelist: true,
            groups: ["update"],
            always: true
        }))
        body: CreatePropertyDto) {
        return body
    }
}
