import { CreateWalletMovimentInput } from "src/modules/wallet/domain/inputs";
import { MovimentType } from "../../domain/enums";

export class CreateWalletMovimentDTO implements CreateWalletMovimentInput{
    id: string;
    description: string;
    value: number;
    type: MovimentType;
    DateMoviment?: Date;
}
