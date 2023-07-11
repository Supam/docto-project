import { Test, TestingModule } from '@nestjs/testing';
import { LaboService } from './labo.service';

describe('LaboService', () => {
  let service: LaboService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LaboService],
    }).compile();

    service = module.get<LaboService>(LaboService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
