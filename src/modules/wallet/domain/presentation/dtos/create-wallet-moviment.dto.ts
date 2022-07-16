import { CreateWalletMovimentInput } from "src/modules/wallet/inputs";
import { MovimentType } from "../../enums";

export class CreateWalletMovimentDTO implements CreateWalletMovimentInput{
    id: string;
    description: string;
    value: number;
    type: MovimentType;
    DateMoviment?: Date;
}
