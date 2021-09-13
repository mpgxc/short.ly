import {
  AbstractAccount,
  TAccountProps,
} from '@domain/account/AbstractAccount';
import { Links } from '@domain/links';

class Customer extends AbstractAccount {
  private readonly links: Links[];

  private constructor(props: TAccountProps, id?: string) {
    super(props, id);
    this.links = [];
  }

  public getLinks(): Links[] {
    return this.links;
  }

  static build(data: TAccountProps, id?: string): Customer {
    return new Customer(data, id);
  }
}

export { Customer };
