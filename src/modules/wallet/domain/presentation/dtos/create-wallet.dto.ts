import { Expose } from "class-transformer";
import { CreateWalletInput } from "src/modules/wallet/inputs";
import {
    ArrayUnique,
    IsArray,
    IsNumber,
    IsString,
    IsUUID,
  } from 'class-validator';

@Expose()
export class CreateWalletDTO implements CreateWalletInput{
   @IsString()
    id: string;
    
    @IsString()
    name: string;

    @IsNumber()
    value: number;
    @IsArray()
    @IsUUID(undefined,{ each: true})
    @ArrayUnique()
    walletMovimentId: String[];

}