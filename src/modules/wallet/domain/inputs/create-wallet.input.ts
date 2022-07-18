import { CreateWalletMovimentInput } from "./crete-wallet-moviment.iput";

export interface CreateWalletInput{
    id: string;
    name: string;
    value: number;
    walletMovimente: CreateWalletMovimentInput[];
}