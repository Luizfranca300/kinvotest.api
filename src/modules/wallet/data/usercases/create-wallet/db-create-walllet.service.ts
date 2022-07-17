import { Inject } from "@nestjs/common";
import { WALLET_REPOSITORY } from "src/modules/wallet/constants";
import { CreateWallet, Wallet } from "src/modules/wallet/domain";
import { CreateWalletInput } from "src/modules/wallet/inputs";
import { WalletRepository } from "../../repositories";

export class DbCreateWalletService implements CreateWallet{
constructor(
    @Inject(WALLET_REPOSITORY)
    private readonly walletRepository : WalletRepository
){}

   public async execute(createWallet: CreateWalletInput): Promise<Wallet> {
        return this.walletRepository.create(createWallet);
    }
    
}