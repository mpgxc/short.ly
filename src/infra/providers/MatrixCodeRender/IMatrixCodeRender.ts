type QRCodeProps = {
  original_url: string;
};

interface IMatrixCodeRender {
  build({ original_url }: QRCodeProps): Promise<string>;
}

export { IMatrixCodeRender, QRCodeProps };
