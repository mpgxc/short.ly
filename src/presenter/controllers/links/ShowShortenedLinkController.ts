import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ShowShortenedLink } from '@app/links/ShowShortenedLink';

class ShowShortenedLinkController {
    async handle(
        request: Request,
        response: Response,
    ): Promise<Response | void> {
        try {
            const { id } = request.params;

            const showShortenedLink = container.resolve(ShowShortenedLink);

            const links = await showShortenedLink.run(id);

            return response.status(302).redirect(links.original_url);
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export { ShowShortenedLinkController };
