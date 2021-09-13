import { inject, injectable } from 'tsyringe';

import { InjectableModules } from '@app/container/InjectableModules';
import { ListCustomerProps } from '@domain/customer/CustomerMapper';
import { ICustomerRepository } from '@domain/customer/ICustomerRepository';

@injectable()
class ListCustomers {
  constructor(
    @inject(InjectableModules.CUSTOMER_REPOSITORY)
    private readonly customerRepository: ICustomerRepository,
  ) {}

  async run(): Promise<ListCustomerProps[]> {
    return this.customerRepository.list();
  }
}

export { ListCustomers };
