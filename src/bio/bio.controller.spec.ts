import { Test, TestingModule } from '@nestjs/testing';
import { BioController } from './bio.controller';

describe('BioController', () => {
  let controller: BioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BioController],
    }).compile();

    controller = module.get<BioController>(BioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
