type LinkShortenerResponse = {
  unique_id: string;
  short_url: string;
  qrcode_url: string;
};

interface ILinkShortener {
  build(): LinkShortenerResponse;
}

export { ILinkShortener, LinkShortenerResponse };
