import { Test, TestingModule } from '@nestjs/testing';
import { DataKpService } from './data_kp.service';

describe('DataKpService', () => {
  let service: DataKpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DataKpService],
    }).compile();

    service = module.get<DataKpService>(DataKpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
