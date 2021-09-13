import { ResponseShortenedLink } from './ResponseShortenedLink';

class CreateShortenedLinkView {
  static build(token: string): ResponseShortenedLink {
    const short_url = `${process.env.BASE_URL}/api/short/${token}`;
    const qrcode_url = `${process.env.BASE_URL}/api/qrcode/${token}`;

    return { qrcode_url, short_url };
  }
}

export { CreateShortenedLinkView };
