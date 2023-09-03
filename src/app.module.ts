import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import databaseConfig from './config/database-config';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot(databaseConfig.mongoURI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
