import { Wallet } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { Expose } from "class-transformer";

export class WalletDTO implements Wallet{
    @Expose()
    id: string;
    @Expose()
    name: string;
    @Expose()
    value: Decimal;
    
    constructor(partial: Partial<WalletDTO>) {
        Object.assign(this, partial);
    }
}