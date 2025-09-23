import { Test, TestingModule } from '@nestjs/testing';
import { PoinStatistikService } from './poin-statistik.service';

describe('PoinStatistikService', () => {
  let service: PoinStatistikService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoinStatistikService],
    }).compile();

    service = module.get<PoinStatistikService>(PoinStatistikService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
