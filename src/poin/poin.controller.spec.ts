import { Test, TestingModule } from '@nestjs/testing';
import { PoinController } from './poin.controller';

describe('PoinController', () => {
  let controller: PoinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoinController],
    }).compile();

    controller = module.get<PoinController>(PoinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
