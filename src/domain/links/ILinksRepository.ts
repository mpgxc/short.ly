import { Links } from './Links';

interface ILinksRepository {
    save(data: Links): Promise<void>;
    findByToken(token: string): Promise<Links | null>;
}

export { ILinksRepository };
