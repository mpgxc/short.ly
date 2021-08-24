import { Entity } from '@commons/Entity';

type TAccountRoles = 'Administrator' | 'Customer';

type TAccountProps = {
    name: string;
    user_name: string;
    email: string;
    password: string;
    bio?: string;
    avatar?: string;
    role: TAccountRoles;
};

class Account extends Entity<TAccountProps> {
    private constructor(props: TAccountProps, id?: string) {
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

    public static build(props: TAccountProps, id?: string): Account {
        return new Account(
            {
                ...props,
            },
            id,
        );
    }
}

export { Account, TAccountRoles, TAccountProps };
