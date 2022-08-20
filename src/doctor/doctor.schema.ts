import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DocDocument = Doc & Document;

@Schema()
export class Doc {
  @Prop()
  name: string;

  @Prop()
  specialization: string;

  
}

export const DocSchema = SchemaFactory.createForClass(Doc);