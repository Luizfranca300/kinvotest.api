import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { WalletModule } from './modules/wallet/wallet.module';

@Module({
  imports: [
    //Own modules
    CommonModule,
    WalletModule,
  ],

})
export class AppModule {}
