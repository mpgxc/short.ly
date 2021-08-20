import { Router } from "express";
import { createShortenedLinkController } from "../../domain/useCases/CreateShortenedLink";
import { createShortenedQRCodeController } from "../../domain/useCases/CreateShortenedQRCode";
import { showShortenedLinkController } from "../../domain/useCases/ShowShortenedLink";

const routes = Router();

routes.post("/short", createShortenedLinkController.handle);
routes.get("/short/:id", showShortenedLinkController.handle);
routes.get("/qrcode/:id", createShortenedQRCodeController.handle);

export { routes };
