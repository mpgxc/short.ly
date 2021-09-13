import { Links } from './Links';

interface ILinksRepository {
  save(links: Links): Promise<void>;
  findByToken(token: string): Promise<Links | null>;
  findByURL(url: string): Promise<Links | null>;
}

export { ILinksRepository };
