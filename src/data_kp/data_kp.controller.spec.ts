import { Test, TestingModule } from '@nestjs/testing';
import { DataKpController } from './data_kp.controller';

describe('DataKpController', () => {
  let controller: DataKpController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataKpController],
    }).compile();

    controller = module.get<DataKpController>(DataKpController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
