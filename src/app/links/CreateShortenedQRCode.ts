import { inject, injectable } from 'tsyringe';

import { InjectableModules } from '@app/container/InjectableModules';
import { ILinksRepository } from '@domain/links/ILinksRepository';
import { IMatrixCodeRenderProvider } from '@infra/providers/MatrixCodeRender';

type CreateShortenedQRCodeResponse = {
  qrcode_buffer: string | Buffer;
};

@injectable()
class CreateShortenedQRCode {
  constructor(
    @inject(InjectableModules.LINKS_REPOSITORY)
    private readonly linksRepository: ILinksRepository,

    @inject(InjectableModules.MATRIX_CODERENDER_PROVIDER)
    private readonly matrixCodeRenderProvider: IMatrixCodeRenderProvider,
  ) {}

  async run(unique_id: string): Promise<CreateShortenedQRCodeResponse> {
    const links = await this.linksRepository.findByToken(unique_id);

    if (!links) {
      throw new Error('Links not found!');
    }

    const { url } = links;

    const qrcode_buffer = await this.matrixCodeRenderProvider.build({
      url,
    });

    return { qrcode_buffer };
  }
}

export { CreateShortenedQRCode };
