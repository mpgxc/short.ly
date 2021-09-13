type LinkShortenerResponse = {
  token: string;
};

interface ILinkShortenerProvider {
  build(): LinkShortenerResponse;
}

export { ILinkShortenerProvider, LinkShortenerResponse };
