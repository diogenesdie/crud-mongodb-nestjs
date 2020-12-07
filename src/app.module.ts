import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://diogenes:21072002@products.urlfa.mongodb.net/test?authSource=admin&replicaSet=atlas-3mzowe-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true'),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
