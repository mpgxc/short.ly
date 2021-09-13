import { Customer } from './Customer';

interface ICustomerRepository {
    save(customer: Customer): Promise<void>;
    list(): Promise<Customer[]>;
}

export { ICustomerRepository };
