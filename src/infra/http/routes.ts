import { Router } from 'express';

import {
  registerCustomerController,
  listCustomerController,
} from '@presenter/controllers/customer';
import {
  createShortenedLinkController,
  showShortenedLinkController,
  createShortenedQRCodeController,
} from '@presenter/controllers/links';

const routes = Router();

routes.post('/short', createShortenedLinkController.handle);
routes.get('/short/:id', showShortenedLinkController.handle);
routes.get('/qrcode/:id', createShortenedQRCodeController.handle);

/**
 * Customer routes
 */

routes.post('/account', registerCustomerController.handle);
routes.get('/account', listCustomerController.handle);

export { routes };
