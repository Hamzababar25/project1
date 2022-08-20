import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { TestModule } from './test/test.module';

async function bootstrap() {
  const app = await NestFactory.create(TestModule);
  await app.listen(3001);
}
bootstrap();
