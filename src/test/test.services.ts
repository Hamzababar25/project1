import { InjectModel } from "@nestjs/mongoose";
import { Doc, DocDocument } from "src/doctor/doctor.schema";
import { Patient, PatientDocument } from "src/patient/patient.schema";
import { Model } from 'mongoose';
import { Test } from "@nestjs/testing";
import { CreateTestDto } from "./test.controller";
import { TestDocument } from "./test.schema";

export class TestService {
    constructor(
      @InjectModel(Patient.name) private readonly PatientModel: Model<PatientDocument>,
      @InjectModel(Doc.name) private readonly docModel: Model<DocDocument>, 
      @InjectModel(Test.name) private readonly testModel: Model<TestDocument>,){}
  
      async createtest(CreatetestDto:CreateTestDto): Promise<Test> {
          const createdtest = await this.testModel.create(CreatetestDto);
          return createdtest;
        }
        async findOne(id: string) {
            return await (await this.testModel.findOne({ _id: id }).populate('docdss', '', this.docModel).populate('patientdss', '',this.PatientModel ).exec());
        }


        async findAlll(): Promise<Test[]> {
            return this.testModel.find().exec();
          }
          async delete(id: string) {
            const deletedtest = await this.testModel
              .findByIdAndRemove({ _id: id })
              .exec();
            return deletedtest;
          }


          async update({id,Tname,Testdate,Testtime,Result}) {
            const updatetest = await this.testModel
              .findByIdAndUpdate(id,{ Tname,Testdate,Testtime,Result })
              .exec();
            return await this.findOne(updatetest._id);


    }





    }