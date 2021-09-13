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
import { LinksRepository } from '@infra/repositories/links/prisma/LinksRepository';

import { InjectableModules } from './InjectableModules';

const QR_PROVIDER =
  process.env.QRCODE_PROVIDER === 'BUFFER'
    ? container.resolve(QRCodeBuffer)
    : container.resolve(QRCode);

container.registerInstance<IMatrixCodeRenderProvider>(
  InjectableModules.MATRIX_CODERENDER_PROVIDER,
  QR_PROVIDER,
);

container.registerSingleton<ILinkShortenerProvider>(
  InjectableModules.LINK_SHORTENER_PROVIDER,
  NanoIdShortener,
);

container.registerSingleton<ILinksRepository>(
  InjectableModules.LINKS_REPOSITORY,
  LinksRepository,
);
