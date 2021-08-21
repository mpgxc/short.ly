type QRCodeProps = {
  original_url: string;
};

interface IMatrixCodeRenderProvider {
  build({ original_url }: QRCodeProps): Promise<string | Buffer>;
}

export { IMatrixCodeRenderProvider, QRCodeProps };
