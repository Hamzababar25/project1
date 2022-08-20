import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { CreatedocDto } from "./doctor.controller";
import { Doc, DocDocument } from "./doctor.schema";

@Injectable()
export class DocService {
  constructor(
    @InjectModel(Doc.name) private readonly docModel: Model<DocDocument>) {}

    async createdoc(createdoctDto:CreatedocDto): Promise<Doc> {
        const createddoc = await this.docModel.create(createdoctDto);
        return createddoc;
      }
      async findAll(): Promise<Doc[]> {
        return this.docModel.find().exec();
      }
      async findOne(id: string): Promise<Doc> {
        return this.docModel.findOne({ _id: id }).exec();
      }
      async delete(id: string) {
        const deleteddoc = await this.docModel
          .findByIdAndRemove({ _id: id })
          .exec();
        return deleteddoc;
      }
      async update({id,name,specialization}) {
        const updatedoc = await this.docModel
          .findByIdAndUpdate(id,{ name,specialization })
          .exec();
        return await this.findOne(updatedoc._id);
      }

  }