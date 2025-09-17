import { Test, TestingModule } from '@nestjs/testing';
import { BioService } from './bio.service';

describe('BioService', () => {
  let service: BioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BioService],
    }).compile();

    service = module.get<BioService>(BioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
