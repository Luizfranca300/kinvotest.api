import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { getEnvFile, validationSchema } from './config';
import { WalletModule } from './modules/wallet/wallet.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
     // External modules
     ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: getEnvFile(),
      validationSchema,
    }),
    //Own modules
    CommonModule,
    WalletModule,
  ],

})
export class AppModule {}
