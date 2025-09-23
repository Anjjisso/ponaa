import { Test, TestingModule } from '@nestjs/testing';
import { PoinService } from './poin.service';

describe('PoinService', () => {
  let service: PoinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoinService],
    }).compile();

    service = module.get<PoinService>(PoinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
