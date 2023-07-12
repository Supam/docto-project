import { Test, TestingModule } from '@nestjs/testing';
import { LaboController } from './labo.controller';

describe('LaboController', () => {
  let controller: LaboController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LaboController],
    }).compile();

    controller = module.get<LaboController>(LaboController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
