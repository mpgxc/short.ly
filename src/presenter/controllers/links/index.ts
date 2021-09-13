import { CreateShortenedLinkController } from './CreateShortenedLinkController';
import { CreateShortenedQRCodeController } from './CreateShortenedQRCodeController';
import { ShowShortenedLinkController } from './ShowShortenedLinkController';

const createShortenedQRCodeController = new CreateShortenedQRCodeController();
const createShortenedLinkController = new CreateShortenedLinkController();
const showShortenedLinkController = new ShowShortenedLinkController();

export {
  createShortenedQRCodeController,
  createShortenedLinkController,
  showShortenedLinkController,
};
