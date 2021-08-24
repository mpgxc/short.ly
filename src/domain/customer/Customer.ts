import { Entity } from '@commons/Entity';
import { Account, TAccountProps } from '@domain/account/Account';

/**
 * If in the future we want to add a new property to the client, we can do it here
 */
type TCustomerProps = {};

type ICreateCustomerDTO = {
    customer: TCustomerProps;
    account: TAccountProps;
};

class Customer extends Entity<TCustomerProps> {
    protected account: Account;

    private constructor(props: ICreateCustomerDTO, id?: string) {
        super(props.customer, id);

        this.account = Account.build(props.account);
    }

    public static build(props: ICreateCustomerDTO, id?: string): Customer {
        return new Customer(props, id);
    }
}

export { Customer, ICreateCustomerDTO };
