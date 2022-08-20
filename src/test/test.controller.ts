import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Doc } from "src/doctor/doctor.schema";
import { Patient } from "src/patient/patient.schema";
import { Test } from "./test.schema";
import { TestService } from "./test.services";

export class CreateTestDto {
    Tname: string;
    Testdate: string;
    Testtime:string;
    Result:string;
    
    docdss: Doc;
    patientdss:Patient;
   
  
  }

  @Controller('Test')
  export class TestController {
      constructor(private readonly testService: TestService) {}


      @Post()
async create(@Body() createtestDto: CreateTestDto) {
   return this.testService.createtest(createtestDto)

}

@Get(':id')
async findOne(@Param('id') id: any): Promise<Test> {
  return this.testService.findOne(id);
}

@Delete(':id')
  async delete(@Param('id') id: string) {
    return this.testService.delete(id);
  }
  @Put(':id')
  async update(@Param('id') id: string,@Body()bd:any) {
    return this.testService.update({id,...bd});
  }
  @Get()
  async findAll(){
    return this.testService.findAlll();
  }








  }
