import { Customer } from './Customer';
import { ListCustomerProps } from './CustomerMapper';

interface ICustomerRepository {
  save(customer: Customer): Promise<void>;
  list(): Promise<ListCustomerProps[]>;
  findById(id: string): Promise<Customer | null>;
}

export { ICustomerRepository };
