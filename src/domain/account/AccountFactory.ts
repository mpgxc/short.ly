import { Customer } from '@domain/customer/Customer';
import {
    DomainException,
    DomainExceptionMessages,
} from '@domain/exceptions/DomainException';

import { TAccountProps, TAccountRoles } from './Account';

enum EAccountRoles {
    Administrator = 'Administrator',
    Customer = 'Customer',
}

class AccountFactory {
    public static buildAccount(
        accountType: TAccountRoles,
        props: TAccountProps,
    ): Customer {
        if (accountType === EAccountRoles.Customer) {
            return Customer.build({
                customer: {},
                account: {
                    ...props,
                    role: accountType,
                },
            });
        }

        throw new DomainException(DomainExceptionMessages.ERROR_CREATE_DOMAIN);
    }
}

export { AccountFactory };
