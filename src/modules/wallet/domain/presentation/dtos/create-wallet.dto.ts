import { Expose, Type } from "class-transformer";
import { CreateWalletInput, CreateWalletMovimentInput } from "src/modules/wallet/inputs";
import {
    IsArray,
    IsNumber,
    IsString,
    ValidateNested,
  } from 'class-validator';
import { CreateWalletMovimentDTO } from "./create-wallet-moviment.dto";

@Expose()
export class CreateWalletDTO implements CreateWalletInput{
    
   @IsString()
    id: string;
    
    @IsString()
    name: string;

    @IsNumber()
    value: number;
    
    @IsArray()
    @ValidateNested({each: true})
    @Type(()=> CreateWalletMovimentDTO)
    walletMovimente: CreateWalletMovimentInput[];

}