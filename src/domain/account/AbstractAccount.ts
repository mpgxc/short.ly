import { Entity } from '@domain/commons/Entity';

type TAccountProps = {
  name: string;
  user_name: string;
  email: string;
  password: string;
  bio?: string;
  avatar?: string;
};

abstract class AbstractAccount extends Entity<TAccountProps> {
  constructor(props: TAccountProps, id?: string) {
    super(props, id);
  }

  get name(): string {
    return this.props.name;
  }

  get userName(): string {
    return this.props.user_name;
  }

  get email(): string {
    return this.props.email;
  }

  get bio(): string | undefined {
    return this.props.bio;
  }

  get avatar(): string | undefined {
    return this.props.avatar;
  }

  get password(): string {
    return this.props.password;
  }
}

export { AbstractAccount, TAccountProps };
