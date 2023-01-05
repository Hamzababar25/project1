import { Test, TestingModule } from '@nestjs/testing';
import { DocController } from './doctor/doctor.controller';
import { DocService } from './doctor/doctor.services';

describe('DocController', () => {
  let controller: DocController;
  let service: DocService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocController],
      providers: [DocService],
    }).compile();

    controller = module.get<DocController>(DocController);
    service = module.get<DocService>(DocService)});
  

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
       var result:Promise<any>;
      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(await controller.findAll()).toBe(result);
    });
  });


});