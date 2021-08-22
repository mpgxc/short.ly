import { CreateShortenedLinkDTO } from '@app/links/CreateShortenedLinkDTO';

interface ILinksRepository {
    save(data: CreateShortenedLinkDTO): Promise<void>;
    findByCode(id: string): Promise<CreateShortenedLinkDTO | null>;
}

export { ILinksRepository };
