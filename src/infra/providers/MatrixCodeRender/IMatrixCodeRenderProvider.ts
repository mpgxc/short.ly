type QRCodeProps = {
  original_url: string;
};

interface IMatrixCodeRenderProvider {
  build({ original_url }: QRCodeProps): Promise<string>;
}

export { IMatrixCodeRenderProvider, QRCodeProps };
