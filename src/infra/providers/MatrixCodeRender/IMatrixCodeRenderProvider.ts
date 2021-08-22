type QRCodeProps = {
    url: string;
};

interface IMatrixCodeRenderProvider {
    build({ url }: QRCodeProps): Promise<string | Buffer>;
}

export { IMatrixCodeRenderProvider, QRCodeProps };
