import { Context } from 'koa';
import { getCustomRepository } from 'typeorm';

import { TestRepo } from '../database/repository';

const getText = async (ctx: Context) => {
  const testRepo = getCustomRepository(TestRepo);

  const test = testRepo.create();
  test.name = Date.now().toLocaleString();

  await testRepo.save(test);

  const tests = await testRepo.find();
  console.log('tests: ', tests);

  ctx.status = 200;
  ctx.body = {
    code: 'SUCCESS',
    message: '성공',
    data: {
      tests
    }
  };
};

export { getText };
