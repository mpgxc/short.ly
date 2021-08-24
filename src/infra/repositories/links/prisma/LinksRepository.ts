import { Links, LinksMapper } from '@domain/links';
import { ILinksRepository } from '@domain/links/ILinksRepository';
import { prisma } from '@infra/database/prisma';

class LinksRepository implements ILinksRepository {
    async save(links: Links): Promise<void> {
        const data = LinksMapper.toPersistence(links);

        await prisma.links.create({
            data,
        });
    }

    async findByToken(token: string): Promise<Links | null> {
        const data = await prisma.links.findUnique({
            where: {
                token,
            },
        });

        return data ? LinksMapper.toDomain(data) : null;
    }
}

export { LinksRepository };
