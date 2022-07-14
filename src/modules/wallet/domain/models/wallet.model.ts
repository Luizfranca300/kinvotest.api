import { WalletMoviment } from "./wallet-moviment.model";

export interface Wallet {
    id: string;
    name: string;
    value: number;
    walletMoviment: WalletMoviment[];
  }
  