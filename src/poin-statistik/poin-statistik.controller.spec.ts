import { Test, TestingModule } from '@nestjs/testing';
import { PoinStatistikController } from './poin-statistik.controller';

describe('PoinStatistikController', () => {
  let controller: PoinStatistikController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoinStatistikController],
    }).compile();

    controller = module.get<PoinStatistikController>(PoinStatistikController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
