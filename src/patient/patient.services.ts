import { InjectModel } from "@nestjs/mongoose";
import { Patient, PatientDocument } from "./patient.schema";
import { Model } from 'mongoose';
import { CreatePatientDto } from "./patient.controller";
import { Doc, DocDocument } from "src/doctor/doctor.schema";

export class PatientService {
    constructor(
      @InjectModel(Patient.name) private readonly PatientModel: Model<PatientDocument>,
      @InjectModel(Doc.name) private readonly docModel: Model<DocDocument>,) {}
  
      async createpatient(CreatepatientDto:CreatePatientDto): Promise<Patient> {
          const createdpatient = await this.PatientModel.create(CreatepatientDto);
          return createdpatient;
        }
        async findOne(id: string) {
            return await this.PatientModel.findOne({ _id: id }).populate('docdss', '', this.docModel).exec();
        }
        async findAll(): Promise<Patient[]> {
            return this.PatientModel.find().exec();
          }
          async delete(id: string) {
            const deletedpat = await this.PatientModel
              .findByIdAndRemove({ _id: id })
              .exec();
            return deletedpat;
          }


          async update({id,name,Insurance,dateadmitted,datecheckout}) {
            const updatepat = await this.PatientModel
              .findByIdAndUpdate(id,{ name,Insurance,dateadmitted,datecheckout })
              .exec();
            return await this.findOne(updatepat._id);


    }


}