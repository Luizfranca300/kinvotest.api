import { MovimentType } from "../domain/enums";

export interface CreateWalletMovimentInput{
    id: string;
    description:string;
    value: number;
    type: MovimentType;
    DateMoviment?: Date;
}