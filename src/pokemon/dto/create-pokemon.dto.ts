import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, Min, IsString, MinLength } from "class-validator";


export class CreatePokemonDto {

    @ApiProperty({
        example: 1,
        description: 'The number of the Pokemon',
        minLength: 1
    })
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;
    
    @ApiProperty({
        example: 'Bulbasaur',
        description: 'The name of the Pokemon'
    })
    @IsString()
    @MinLength(1)
    name: string;

}
