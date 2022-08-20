import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DocController } from "./doctor.controller";
import { Doc, DocSchema } from "./doctor.schema";
import { DocService } from "./doctor.services";

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://hamza025:mynameisjeff786@cluster0.ns2rve7.mongodb.net/test'),
    MongooseModule.forFeature([{ name: Doc.name, schema: DocSchema }])],
    controllers: [DocController],
    providers: [DocService],
  })
  export class DocModule {}