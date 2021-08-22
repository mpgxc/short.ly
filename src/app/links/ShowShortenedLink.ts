import { inject, injectable } from 'tsyringe';

import { ILinksRepository } from '@domain/links/ILinksRepository';

type ShowShortenedLinkResponse = {
    url: string;
};

@injectable()
class ShowShortenedLink {
    constructor(
        @inject('LinksRepository')
        private readonly linksRepository: ILinksRepository,
    ) {}

    async run(token: string): Promise<ShowShortenedLinkResponse> {
        const links = await this.linksRepository.findByToken(token);

        if (!links) {
            throw new Error('Links not found!');
        }

        return { url: links.url };
    }
}

export { ShowShortenedLink };
