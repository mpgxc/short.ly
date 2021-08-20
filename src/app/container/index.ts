import { container } from 'tsyringe';
import { ILinksRepository } from '../../domain/repositories/ILinksRepository';
import { LinksRepository } from '../../domain/repositories/memory/LinksRepository';
import { ILinkShortenerProvider, NanoIdShortener } from '../../infra/providers/LinkShortener';
import { IMatrixCodeRenderProvider, QRCode } from '../../infra/providers/MatrixCodeRender';

container.registerSingleton<ILinkShortenerProvider>(
    'LinkShortenerProvider',
    NanoIdShortener,
);

container.registerSingleton<ILinksRepository>(
    'LinksRepository',
    LinksRepository,
);

container.registerSingleton<IMatrixCodeRenderProvider>(
    'MatrixCodeRenderProvider',
    QRCode,
);
