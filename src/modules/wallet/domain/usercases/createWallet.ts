import { CreateWalletInput } from "../inputs";
import { Wallet } from "../models";

export interface CreateWallet{
    execute(CreateWallet: CreateWalletInput): Promise<Wallet>;
}