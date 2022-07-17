import { Module } from '@nestjs/common';
import { WalletModule } from './modules/wallet/wallet.module';

@Module({
  imports: [
    //Own modules
    WalletModule,
  ],

})
export class AppModule {}
