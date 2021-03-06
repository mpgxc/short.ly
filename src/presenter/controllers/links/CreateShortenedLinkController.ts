import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateShortenedLink } from '@app/links/CreateShortenedLink';

type ShortenedLinkRequest = {
  url: string;
  customer_id: string;
};

class CreateShortenedLinkController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { url, customer_id } = request.body as ShortenedLinkRequest;

      const createShortenedLink = container.resolve(CreateShortenedLink);

      const { qrcode_url, short_url } = await createShortenedLink.run({
        customer_id,
        url,
      });

      return response.status(201).json({ qrcode_url, short_url });
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { CreateShortenedLinkController };
