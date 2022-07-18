import { Expose, Type } from "class-transformer";
import { CreateWalletInput, CreateWalletMovimentInput } from "src/modules/wallet/domain/inputs";
import {
    IsArray,
    IsNumber,
    IsString,
    ValidateNested,
  } from 'class-validator';
import { CreateWalletMovimentDTO } from "./create-wallet-moviment.dto";
import { ApiProperty } from "@nestjs/swagger";

@Expose()
export class CreateWalletDTO implements CreateWalletInput{
    @ApiProperty()
    @IsString()
    id: string;

    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNumber()
    value: number;
    @ApiProperty()
    @IsArray()
    @ValidateNested({each: true})
    @Type(()=> CreateWalletMovimentDTO)
    walletMovimente?: CreateWalletMovimentInput[];

}