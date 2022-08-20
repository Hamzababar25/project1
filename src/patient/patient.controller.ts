import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Doc } from "src/doctor/doctor.schema";
import { Patient } from "./patient.schema";
import { PatientService } from "./patient.services";

export class CreatePatientDto {
    name: string;
    Insurance: string;
    dateadmitted:string;
    datecheckout:string;
    
    docdss: Doc;
   
  
  }
  @Controller('Patient')
export class PatientController {
    constructor(private readonly patientService: PatientService) {}

    @Post()
async create(@Body() createpatientDto: CreatePatientDto) {
   return this.patientService.createpatient(createpatientDto)

}

@Get(':id')
async findOne(@Param('id') id: any): Promise<Patient> {
  return this.patientService.findOne(id);
}

@Delete(':id')
  async delete(@Param('id') id: string) {
    return this.patientService.delete(id);
  }
  @Put(':id')
  async update(@Param('id') id: string,@Body()bd:any) {
    return this.patientService.update({id,...bd});
  }
  @Get()
  async findAll(): Promise<Patient[]> {
    return this.patientService.findAll();



}
}