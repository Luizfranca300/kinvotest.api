import { INestApplication, VersioningType } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { PrismaService } from './common/infra';

declare const module: any;

function setupSwaggerDocumentation(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('Kinvo Purchases')
    .setDescription('The @kinvo/purchases API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('apidoc', app, document);
}

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  app.enableVersioning({
    type: VersioningType.URI,
  });

  setupSwaggerDocumentation(app);

  const configService = app.get(ConfigService);

  const prismaService = app.get(PrismaService);
  prismaService.enableShutdownHooks(app);

  const port = configService.get('PORT');
  const address = configService.get('ADDRESS');

  await app.listen(port, address);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}

bootstrap();
