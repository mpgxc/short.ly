import { LinksMapper } from '@domain/links';
import { ILinksRepository } from '@domain/links/ILinksRepository';
import { Links } from '@domain/links/Links';

class LinksRepository implements ILinksRepository {
    private links: Links[];

    constructor() {
        this.links = [];
    }

    async findByToken(token: string): Promise<Links | null> {
        const links = this.links.find(link => link.token === token);

        if (!links) {
            return null;
        }

        return links;
    }

    async save(links: Links): Promise<void> {
        const { id, token, url } = LinksMapper.toPersistence(links);

        this.links.push({ id, token, url } as Links);
    }
}

export { LinksRepository };
