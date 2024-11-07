import { Dummy } from 'orm/entities/Dummy';
import { EntityManager } from 'typeorm';

export async function insertDummy(manager: EntityManager) {
  const dummy = manager.create(Dummy, {
    dummy: 'somethign random',
  });

  return manager.save(Dummy, dummy);
}
