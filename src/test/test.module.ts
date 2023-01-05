import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { DocModule } from "src/doctor";
import { DocController } from "src/doctor/doctor.controller";
import { Doc, DocSchema } from "src/doctor/doctor.schema";
import { DocService } from "src/doctor/doctor.services";
import { PatientController } from "src/patient/patient.controller";
import { Patient, PatientSchema } from "src/patient/patient.schema";
import { PatientService } from "src/patient/patient.services";
import { TestController } from "./test.controller";
import { Test, TestSchema } from "./test.schema";
import { TestService } from "./test.services";

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://hamza025:mynameisjeff786@cluster0.ns2rve7.mongodb.net/test'),
    MongooseModule.forFeature([{name:Test.name,schema:TestSchema},{ name: Patient.name, schema: PatientSchema },{name:Doc.name,schema:DocSchema}])],
    controllers: [TestController,PatientController,DocController],
    providers: [TestService,PatientService,DocService,DocModule],
  })
  export class TestModule {}