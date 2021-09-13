import { Customer } from './Customer';

interface ICustomerRepository {
    save(customer: Customer): Promise<void>;
    list(): Promise<Customer[]>;
    findById(id: string): Promise<Customer | null>;
}

export { ICustomerRepository };
