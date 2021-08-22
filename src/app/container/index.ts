import { container } from 'tsyringe';

import { ILinksRepository } from '@domain/links/ILinksRepository';
import {
    ILinkShortenerProvider,
    NanoIdShortener,
} from '@infra/providers/LinkShortener';
import {
    QRCodeBuffer,
    QRCode,
    IMatrixCodeRenderProvider,
} from '@infra/providers/MatrixCodeRender';
import { LinksRepository } from '@infra/repositories/links/memory/LinksRepository';

const QR_PROVIDER =
    process.env.QRCODE_PROVIDER === 'BUFFER'
        ? container.resolve(QRCodeBuffer)
        : container.resolve(QRCode);

container.registerInstance<IMatrixCodeRenderProvider>(
    'MatrixCodeRenderProvider',
    QR_PROVIDER,
);

container.registerSingleton<ILinkShortenerProvider>(
    'LinkShortenerProvider',
    NanoIdShortener,
);

container.registerSingleton<ILinksRepository>(
    'LinksRepository',
    LinksRepository,
);
