
import { Observable } from "rxjs";
import { Wallet } from "../../domain/models";
import { CreateWalletInput } from "../../domain/inputs";

export interface WalletRepository{
create( input: CreateWalletInput): Promise<Wallet>

}