import { CreateShortenedLinkDTO } from '@app/links/CreateShortenedLinkDTO';
import { ILinksRepository } from '@domain/links/ILinksRepository';

class LinksRepository implements ILinksRepository {
    private links: CreateShortenedLinkDTO[];

    constructor() {
        this.links = [];
    }

    async findByCode(id: string): Promise<CreateShortenedLinkDTO | null> {
        const links = this.links.find(link => link.unique_id === id);

        if (!links) {
            return null;
        }

        return links;
    }

    async save({
        original_url,
        qrcode_url,
        short_url,
        unique_id,
    }: CreateShortenedLinkDTO): Promise<void> {
        this.links.push({
            original_url,
            qrcode_url,
            short_url,
            unique_id,
        });
    }
}

export { LinksRepository };
