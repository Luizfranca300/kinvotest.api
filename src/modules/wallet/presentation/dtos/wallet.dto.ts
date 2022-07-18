import { ApiProperty } from "@nestjs/swagger";
import { Decimal } from "@prisma/client/runtime";
import { Expose, Type } from "class-transformer";
import { Wallet, WalletMoviment, walletMovimentDTO } from "../../domain";

export class WalletDTO implements Wallet{
    @Expose()
    @ApiProperty()
    id: string;
    @Expose()
    @ApiProperty()
    name: string;
    @Expose()
    @ApiProperty()
    value: number;
    @Expose()
    @Type(() => walletMovimentDTO)
    walletMoviment?: WalletMoviment[];

    constructor(partial: Partial<WalletDTO>) {
        Object.assign(this, partial);
    }
  
}