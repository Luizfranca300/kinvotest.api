import { MovimentType } from "../enums";

export interface WalletMoviment{
    id: string;
    description:string;
    value: number;
    type: MovimentType;
  }

