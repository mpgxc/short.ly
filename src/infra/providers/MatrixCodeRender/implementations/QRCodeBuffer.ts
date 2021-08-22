import { toDataURL as qrCodeBuild } from 'qrcode';
import { injectable } from 'tsyringe';

import {
    IMatrixCodeRenderProvider,
    QRCodeProps,
} from '../IMatrixCodeRenderProvider';

@injectable()
class QRCodeBuffer implements IMatrixCodeRenderProvider {
    async build({ original_url }: QRCodeProps): Promise<Buffer> {
        const qrcode_buffer = await qrCodeBuild(original_url, {
            type: 'image/jpeg',
            width: 500,
            margin: 0.5,
            errorCorrectionLevel: 'H',
        });

        const pattern = /^data:image\/(png|jpeg|jpg);base64,/;
        const sufixBuffer = qrcode_buffer.replace(pattern, '');

        return Buffer.from(sufixBuffer, 'base64');
    }
}

export { QRCodeBuffer };
