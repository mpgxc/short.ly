import { CreateShortenedLinkDTO } from '../useCases/CreateShortenedLink/CreateShortenedLinkDTO';

interface ILinksRepository {
	save(data: CreateShortenedLinkDTO): Promise<void>;
	findByCode(id: string): Promise<CreateShortenedLinkDTO | null>;
}

export { ILinksRepository };
