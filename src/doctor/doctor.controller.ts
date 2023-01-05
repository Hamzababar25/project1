import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Doc } from "./doctor.schema";
import { DocService } from "./doctor.services";

export class CreatedocDto {
    name: string;
    specialization: string
   
  
  }

  @Controller('Doc')
export class DocController {
    constructor(private readonly docService: DocService) {}

    @Post()
async create(@Body() createdoctDto: CreatedocDto) {
   return this.docService.createdoc(createdoctDto)

}
@Get()
  async findAll(): Promise<Doc[]> {
    return this.docService.findAll();
  }
@Get(':id')
async findOne(@Param('id') id: string): Promise<Doc> {
  return this.docService.findOne(id);
}

@Delete(':id')
  async delete(@Param('id') id: string) {
    return this.docService.delete(id);
  }
  @Put(':id')
  async update(@Param('id') id: string,@Body()bd:any) {
    return this.docService.update({id,...bd});
  }
}