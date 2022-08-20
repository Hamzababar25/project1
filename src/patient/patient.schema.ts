import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Doc } from 'src/doctor/doctor.schema';

export type PatientDocument = Patient & Document;

@Schema()
export class Patient {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Doc' })
  docdss: Doc;

  @Prop()
  name: string;

  @Prop()
  Insurance: string;

  @Prop()
  dateadmitted: mongoose.Schema.Types.Date;

  @Prop()
  datecheckout: mongoose.Schema.Types.Date;
  



  
}

export const PatientSchema = SchemaFactory.createForClass(Patient);