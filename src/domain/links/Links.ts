import { Entity } from '@domain/commons';

import { URL } from './URL';

type LinksProps = {
  customerId: string;
  token: string;
  url: URL;
};

class Links extends Entity<LinksProps> {
  private constructor(props: LinksProps, id?: string) {
    super(props, id);
  }

  get token(): string {
    return this.props.token;
  }

  get url(): string {
    return this.props.url.value;
  }

  get customerId(): string {
    return this.props.customerId;
  }

  public static build(props: LinksProps, id?: string): Links {
    return new Links(props, id);
  }
}

export { Links };
