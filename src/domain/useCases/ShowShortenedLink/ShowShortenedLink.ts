import { inject, injectable } from "tsyringe";
import { ILinksRepository } from "../../repositories/ILinksRepository";

type ShowShortenedLinkResponse = {
    original_url: string;
}

@injectable()
class ShowShortenedLink {

    constructor(
        @inject('LinksRepository')
        private readonly linksRepository: ILinksRepository
    ) { }

    async run(unique_id: string): Promise<ShowShortenedLinkResponse> {

        const links = await this.linksRepository.findByCode(unique_id)

        if (!links) {
            throw new Error('Links not found!')
        }

        return {
            ...links
        }
    }
}

export { ShowShortenedLink };
