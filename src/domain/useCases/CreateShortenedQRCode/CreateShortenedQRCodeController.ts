import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateShortenedQRCode } from "./CreateShortenedQRCode";

class CreateShortenedQRCodeController {

    async handle(request: Request, response: Response): Promise<Response | void> {
        try {
            const { id } = request.params

            const createShortenedQRCode = container.resolve(CreateShortenedQRCode);

            const { qrcode_buffer } = await createShortenedQRCode.run(id);

            return response.status(201).send(qrcode_buffer);

        } catch (error) {
            return response
                .status(400)
                .json({ message: error.message })
        }
    }
}

export { CreateShortenedQRCodeController };
