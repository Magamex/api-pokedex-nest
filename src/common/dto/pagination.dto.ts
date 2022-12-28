import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {
    
    @ApiProperty({
        default: 10, 
        description: "The number of items to return",
        required: false
    })
    @IsOptional()
    @IsPositive()
    @Min(1)
    limit?: number;

    @ApiProperty({
        default: 1, description: "The number of items to skip", required: false
    })
    @IsOptional()
    @IsPositive()
    offset?: number;
}