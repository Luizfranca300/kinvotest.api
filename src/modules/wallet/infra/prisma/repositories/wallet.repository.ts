import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/common/infra";
import { WalletRepository } from "src/modules/wallet/data";
import { Wallet } from "src/modules/wallet/domain/models";
import { CreateWalletInput } from "src/modules/wallet/domain/inputs";

@Injectable()
export class PrismaWalletRepository implements WalletRepository{
    constructor( private readonly prismaService: PrismaService){}

 public async create(input: CreateWalletInput): Promise<Wallet> {
     const wallet = await this.prismaService.wallet.create({
        data: input,
        include: {
      walletMoviment: true,
        },
      });

    return {...wallet,
        value: wallet.value.toNumber(),
        walletMoviment: [],
    }
    }
    
}