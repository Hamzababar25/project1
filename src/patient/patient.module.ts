import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Doc, DocSchema } from "src/doctor/doctor.schema";
import { PatientController } from "./patient.controller";
import { Patient, PatientSchema } from "./patient.schema";
import { PatientService } from "./patient.services";

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://hamza025:mynameisjeff786@cluster0.ns2rve7.mongodb.net/test'),
    MongooseModule.forFeature([{ name: Patient.name, schema: PatientSchema },{name:Doc.name,schema:DocSchema}])],
    controllers: [PatientController],
    providers: [PatientService],
  })
  export class PatientModule {}