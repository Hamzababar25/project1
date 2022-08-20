import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Doc } from 'src/doctor/doctor.schema';
import { Patient } from 'src/patient/patient.schema';

export type TestDocument = Test & Document;

@Schema()
export class Test {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Doc' })
  docdss: Doc;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' })
  patientdss: Patient;

  

  @Prop()
  Tname: string;

 

  @Prop()
  Testdate: mongoose.Schema.Types.Date;

  @Prop()
  Testtime: string;

  @Prop()
  Result: string;
  



  
}

export const TestSchema = SchemaFactory.createForClass(Test);