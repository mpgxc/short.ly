import { inject, injectable } from 'tsyringe';

import { ILinksRepository } from '@domain/links/ILinksRepository';
import { IMatrixCodeRenderProvider } from '@infra/providers/MatrixCodeRender';

type CreateShortenedQRCodeResponse = {
    qrcode_buffer: string | Buffer;
};

@injectable()
class CreateShortenedQRCode {
    constructor(
        @inject('LinksRepository')
        private readonly linksRepository: ILinksRepository,

        @inject('MatrixCodeRenderProvider')
        private readonly matrixCodeRenderProvider: IMatrixCodeRenderProvider,
    ) {}

    async run(unique_id: string): Promise<CreateShortenedQRCodeResponse> {
        const links = await this.linksRepository.findByCode(unique_id);

        if (!links) {
            throw new Error('Links not found!');
        }

        const { original_url } = links;

        const qrcode_buffer = await this.matrixCodeRenderProvider.build({
            original_url,
        });

        return { qrcode_buffer };
    }
}

export { CreateShortenedQRCode };
