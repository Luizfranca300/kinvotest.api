import { Module } from "@nestjs/common";
import { CREATE_WALLET, WALLET_REPOSITORY } from "./constants";
import { DbCreateWalletService } from "./data";
import { WalletsController } from "./domain";
import { PrismaWalletRepository } from "./infra";

@Module({
providers:[
    //Use Cases
    {provide: CREATE_WALLET, useClass: DbCreateWalletService},
    //Repositories
    {provide: WALLET_REPOSITORY, useClass: PrismaWalletRepository},
],
controllers:[
 WalletsController,
],
})
export class WalletModule{}