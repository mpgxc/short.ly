import { v4 as uuid } from 'uuid';

class EntityID {
    static build(): string {
        return uuid();
    }
}

export { EntityID };
