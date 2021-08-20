type QRCodeProps = {
  originalURL: string;
};

interface IMatrixCodeRender {
  build({ originalURL }: QRCodeProps): Promise<string>;
}

export { IMatrixCodeRender, QRCodeProps };
