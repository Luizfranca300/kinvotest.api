import { WalletMoviment } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { Expose } from "class-transformer";

export class walletMovimentDTO implements WalletMoviment{
    @Expose()
    id: string;

    @Expose()
    description: string;

    @Expose()
    dateMoviment: Date;

    @Expose()
    value: Decimal;

    @Expose()
    type: string;

    @Expose()
    walletId: string;

    @Expose()
    createdAt: Date;

    @Expose()
    updatedAt: Date;

constructor(partial: Partial<walletMovimentDTO>) {
    Object.assign(this, partial);
}
}