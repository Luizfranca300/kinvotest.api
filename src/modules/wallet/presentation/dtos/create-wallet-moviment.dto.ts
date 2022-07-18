import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsDate, IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { parseDate } from "src/common/presentation";
import { CreateWalletMovimentInput } from "src/modules/wallet/domain/inputs";
import { MovimentType } from "../../domain/enums";

export class CreateWalletMovimentDTO implements CreateWalletMovimentInput{
   
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsNumber()
    value: number;

    @ApiProperty({enum: MovimentType})
    @IsEnum(MovimentType)
    type: MovimentType;
   
    @IsDate()
    @Transform(({ value }) => parseDate(value))
    @IsOptional()
    @ApiPropertyOptional({ example: new Date().toISOString() })
    DateMoviment?: Date;
}
