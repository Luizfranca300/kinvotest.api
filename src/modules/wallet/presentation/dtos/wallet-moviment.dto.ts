import { ApiProperty } from "@nestjs/swagger";
import { WalletMoviment } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { Expose } from "class-transformer";

export class walletMovimentDTO implements WalletMoviment{
    @Expose()
    @ApiProperty()
    id: string;

    @Expose()
    @ApiProperty()
    description: string;

    @Expose()
    @ApiProperty()
    dateMoviment: Date;

    @Expose()
    @ApiProperty()
    value: Decimal;

    @Expose()
    @ApiProperty()
    type: string;

    @Expose()
    @ApiProperty()
    walletId: string;

    @Expose()
    @ApiProperty()
    createdAt: Date;

    @Expose()
    @ApiProperty()
    updatedAt: Date;

constructor(partial: Partial<walletMovimentDTO>) {
    Object.assign(this, partial);
}
}