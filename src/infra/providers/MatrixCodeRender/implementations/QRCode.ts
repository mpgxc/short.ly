import fs from 'fs';
import handlebars from 'handlebars';
import path from 'path';
import { toDataURL as qrCodeBuild } from 'qrcode';
import { injectable } from 'tsyringe';

import { Logger } from '../../Logger';
import {
  IMatrixCodeRenderProvider,
  QRCodeProps,
} from '../IMatrixCodeRenderProvider';

@injectable()
class QRCode implements IMatrixCodeRenderProvider {
  async build({ url }: QRCodeProps): Promise<string> {
    const qrcode_buffer = await qrCodeBuild(url, {
      type: 'image/jpeg',
      width: 500,
      scale: 10,
    });

    const pathTemplateRender = path.resolve(
      __dirname,
      '..',
      'template',
      'index.hbs',
    );

    if (!fs.existsSync(pathTemplateRender)) {
      Logger.fatal('Template file not found!');

      throw new Error('Template file not found!');
    }

    const fileTemplateRender = fs
      .readFileSync(pathTemplateRender)
      .toString('utf-8');

    const compiledTemplateRender = handlebars.compile(fileTemplateRender);

    return compiledTemplateRender({ qrcode_buffer });
  }
}

export { QRCode };
