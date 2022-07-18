import { Body, Inject } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { CREATE_WALLET } from "src/modules/wallet/constants";
import { CreateWallet } from "../../../domain/usercases";
import { CreateWalletDTO, WalletDTO } from "../../dtos";
import { PostWallets, walletsResource } from "../_decorators";

@walletsResource()
export class WalletsController{
    constructor(
        @Inject(CREATE_WALLET)
        private readonly createWallet: CreateWallet,
    ){}


@PostWallets()
public async store(@Body() input: CreateWalletDTO) :Promise<WalletDTO>{
const wallet = await this.createWallet.execute(input);
return plainToInstance(WalletDTO, wallet);
}

}