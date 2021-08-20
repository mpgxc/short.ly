import fs from "fs";
import path from "path";
import { toDataURL as qrCodeBuild } from "qrcode";
import handlebars from "handlebars";

import { IMatrixCodeRender, QRCodeProps } from "../IMatrixCodeRender";
import { Logger } from "../../Logger";

class QRCode implements IMatrixCodeRender {
  async build({ originalURL }: QRCodeProps): Promise<string> {
    const qrcode_buffer = await qrCodeBuild(originalURL, {
      type: "image/jpeg",
      width: 500,
      scale: 10,
    });

    const pathTemplateRender = path.resolve(
      __dirname,
      "..",
      "template",
      "indsex.hbs"
    );

    if (!fs.existsSync(pathTemplateRender)) {
      Logger.fatal("Template file not found!");

      throw new Error("Template file not found!");
    }

    const fileTemplateRender = fs
      .readFileSync(pathTemplateRender)
      .toString("utf-8");

    const compiledTemplateRender = handlebars.compile(fileTemplateRender);

    return compiledTemplateRender({ qrcode_buffer });
  }
}

export { QRCode };
