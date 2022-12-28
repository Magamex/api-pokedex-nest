import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose/dist";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document {
    
    @ApiProperty({
        example: 'Bulbasaur',
        description: 'The name of the Pokemon',
        uniqueItems: true,
    })
    @Prop({
        unique: true,
        index: true
    })
    name: string;

    @ApiProperty({
        example: 1,
        description: 'The number of the Pokemon',
        uniqueItems: true,
    })
    @Prop({
        unique: true,
        index: true
    })
    no: number;
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);