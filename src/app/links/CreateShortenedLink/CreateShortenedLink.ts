import { inject, injectable } from 'tsyringe';

import { ILinksRepository, Links, URL } from '@domain/links';
import { ILinkShortenerProvider } from '@infra/providers/LinkShortener';

import { CreateShortenedLinkView } from './CreateShortenedLinkView';
import { ResponseShortenedLink } from './ResponseShortenedLink';

@injectable()
class CreateShortenedLink {
    constructor(
        @inject('LinksRepository')
        private readonly linksRepository: ILinksRepository,

        @inject('LinkShortenerProvider')
        private readonly linkShortenerProvider: ILinkShortenerProvider,
    ) {}

    async run(url: string): Promise<ResponseShortenedLink> {
        const { token } = this.linkShortenerProvider.build();

        const links = Links.build({
            token,
            url: URL.build(url),
        });

        await this.linksRepository.save(links);

        const { qrcode_url, short_url } = CreateShortenedLinkView.build(token);

        return {
            qrcode_url,
            short_url,
        };
    }
}

export { CreateShortenedLink };
