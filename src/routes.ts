import { Router } from "express";
import { nanoid } from "nanoid";
import qr from "qrcode";
import handlebars from "handlebars";
import fs from "fs";
import path from "path";

type DataBaseShortItem = {
  id: string;
  originalURL: string;
  shortURL: string;
  qrCodeURL: string;
  qrCode: string;
};

const PORT_SERVER = process.env.PORT_SERVER;

const routes = Router();
const database: DataBaseShortItem[] = [];

routes.post("/short", async (request, response) => {
  const { url } = request.body;
  const id = nanoid();
  const shortURL = `http://localhost:${PORT_SERVER}/api/short/${id}`;
  const qrCodeURL = `http://localhost:${PORT_SERVER}/api/qrcode/${id}`;

  const qrCode = await qr.toDataURL(url, {
    type: "image/jpeg",
    width: 500,
    scale: 10,
  });

  database.push({ id, originalURL: url, shortURL, qrCode, qrCodeURL });

  return response.status(201).json({
    message: "success",
    shortURL,
    qrCodeURL,
  });
});

routes.get("/short/:id", (request, response) => {
  const { id } = request.params;

  const item = database.find((item) => item.id === id);

  if (!item) {
    return response.status(404).send("Foi mal ai!");
  }

  return response.status(200).redirect(item.originalURL);
});

routes.get("/qrcode/:id", (request, response) => {
  const { id } = request.params;

  const item = database.find((item) => item.id === id);

  if (!item) {
    return response.status(404).send("Foi mal ai!");
  }

  const templateResolvePath = path.resolve(__dirname, "views", "qrcode.hbs");

  const params = {
    qrcode_data: item.qrCode,
  };

  const templateFile = fs.readFileSync(templateResolvePath).toString("utf-8");
  const templateParsed = handlebars.compile(templateFile);
  const templateParsedHTML = templateParsed(params);

  return response.send(templateParsedHTML);
});

export { routes };
