import { Router } from 'express';

import {
    createShortenedLinkController,
    showShortenedLinkController,
    createShortenedQRCodeController,
} from '@presenter/controllers/links';

const routes = Router();

routes.post('/short', createShortenedLinkController.handle);
routes.get('/short/:id', showShortenedLinkController.handle);
routes.get('/qrcode/:id', createShortenedQRCodeController.handle);

export { routes };
