
import { Observable } from "rxjs";
import { Wallet } from "../../domain/models";
import { CreateWalletInput } from "../../inputs";

export interface WalletRepository{
create( input: CreateWalletInput, walletMovimente): Observable<Wallet>

}