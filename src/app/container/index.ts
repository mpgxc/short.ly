import { container } from 'tsyringe';

import { ILinksRepository } from '../../domain/repositories/ILinksRepository';
import { LinksRepository } from '../../domain/repositories/memory/LinksRepository';
import {
	ILinkShortenerProvider,
	NanoIdShortener,
} from '../../infra/providers/LinkShortener';
import {
	IMatrixCodeRenderProvider,
	QRCode,
	QRCodeBuffer,
} from '../../infra/providers/MatrixCodeRender';

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
