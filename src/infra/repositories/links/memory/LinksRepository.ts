import { LinksMapper } from '@domain/links';
import { ILinksRepository } from '@domain/links/ILinksRepository';
import { Links } from '@domain/links/Links';

class LinksRepository implements ILinksRepository {
    private links: Links[];

    constructor() {
        this.links = [];
    }

    async findByURL(url: string): Promise<Links | null> {
        const links = this.links.find(link => link.url === url);

        return links || null;
    }

    async findByToken(token: string): Promise<Links | null> {
        const links = this.links.find(link => link.token === token);

        return links || null;
    }

    async save(links: Links): Promise<void> {
        const { id, token, url } = LinksMapper.toPersistence(links);

        this.links.push({ id, token, url } as Links);
    }
}

export { LinksRepository };
