import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateShortenedQRCode } from '@app/links/CreateShortenedQRCode';

class CreateShortenedQRCodeController {
    async handle(
        request: Request,
        response: Response,
    ): Promise<Response | void> {
        try {
            const { id } = request.params;

            const createShortenedQRCode = container.resolve(
                CreateShortenedQRCode,
            );

            const { qrcode_buffer } = await createShortenedQRCode.run(id);

            if (qrcode_buffer instanceof Buffer) {
                return response.end(qrcode_buffer);
            }

            return response.status(201).send(qrcode_buffer);
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }
}

export { CreateShortenedQRCodeController };
