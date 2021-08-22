type CreateShortenedLinkDTO = {
    unique_id: string;
    original_url: string;
    qrcode_url: string;
    short_url: string;
};

export { CreateShortenedLinkDTO };
