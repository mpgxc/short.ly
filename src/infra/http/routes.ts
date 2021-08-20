import { Router } from "express";
import { NanoIdShortener } from "../providers/LinkShortener/implementations/NanoIdShortener";

import { QRCode } from "../providers/MatrixCodeRender";

type DataBaseShortItem = {
  original_url: string;
  qrcode_url: string;
  short_url: string;
  unique_id: string;
};

const routes = Router();
const database: DataBaseShortItem[] = [];

const nanoIdBuilder = new NanoIdShortener();

routes.post("/short", async (request, response) => {
  const { original_url } = request.body;
  const { qrcode_url, short_url, unique_id } = nanoIdBuilder.build();

  database.push({
    original_url,
    qrcode_url,
    short_url,
    unique_id,
  });

  return response.status(201).json({
    short_url,
    qrcode_url,
  });
});

routes.get("/short/:id", (request, response) => {
  const { id } = request.params;

  const item = database.find((item) => item.unique_id === id);

  if (!item) {
    return response.status(404).send("Foi mal ai!");
  }

  return response.status(200).redirect(item.original_url);
});

const qrCode = new QRCode();

routes.get("/qrcode/:id", async (request, response) => {
  const { id } = request.params;

  const item = database.find((item) => item.unique_id === id);

  if (!item) {
    return response.status(404).send("Foi mal ai!");
  }

  const { original_url } = item;

  const qrCodeHTML = await qrCode.build({ original_url });

  return response.send(qrCodeHTML);
});

export { routes };
