import { Wallet } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";

export class WalletDTO implements Wallet{
    id: string;
    name: string;
    value: Decimal;
    
}