import { Entity } from '@commons/.';

import { URL } from './URL';

type ILinksProps = {
    token: string;
    url: URL;
};

class Links extends Entity<ILinksProps> {
    private constructor(props: ILinksProps, id?: string) {
        super(props, id);
    }

    get token(): string {
        return this.props.token;
    }

    get url(): string {
        return this.props.url.getValue();
    }

    public static build(props: ILinksProps, id?: string): Links {
        return new Links(props, id);
    }
}

export { Links };
