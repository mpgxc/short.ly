import { v4 as uuid, validate } from 'uuid';

class EntityID {
  static build(): string {
    return uuid();
  }

  static check(value: string): boolean {
    return validate(value);
  }
}

export { EntityID };
