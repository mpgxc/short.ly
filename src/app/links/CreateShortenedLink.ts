import { inject, injectable } from 'tsyringe';

import { ILinksRepository } from '@domain/links/ILinksRepository';
import { ILinkShortenerProvider } from '@infra/providers/LinkShortener';

type CreateShortenedLinkResponse = {
    short_url: string;

    qrcode_url: string;
};

@injectable()
class CreateShortenedLink {
    constructor(
        @inject('LinksRepository')
        private readonly linksRepository: ILinksRepository,

        @inject('LinkShortenerProvider')
        private readonly linkShortenerProvider: ILinkShortenerProvider,
    ) {}

    async run(original_url: string): Promise<CreateShortenedLinkResponse> {
        const { qrcode_url, short_url, unique_id } =
            this.linkShortenerProvider.build();

        await this.linksRepository.save({
            original_url,
            qrcode_url,
            short_url,
            unique_id,
        });

        return {
            qrcode_url,
            short_url,
        };
    }
}

export { CreateShortenedLink };
