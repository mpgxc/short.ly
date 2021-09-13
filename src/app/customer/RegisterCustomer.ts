import { inject, injectable } from 'tsyringe';

import { InjectableModules } from '@app/container/InjectableModules';
import { Customer } from '@domain/customer/Customer';
import { ICustomerRepository } from '@domain/customer/ICustomerRepository';

type RegisterCustomerRequest = {
  name: string;
  user_name: string;
  email: string;
  password: string;
  bio?: string;
};

@injectable()
class RegisterCustomer {
  constructor(
    @inject(InjectableModules.CUSTOMER_REPOSITORY)
    private readonly customerRepository: ICustomerRepository,
  ) {}

  async run({
    email,
    name,
    password,
    user_name,
    bio,
  }: RegisterCustomerRequest): Promise<void> {
    const customer = Customer.build({
      email,
      name,
      password,
      user_name,
      bio,
    });

    await this.customerRepository.save(customer);
  }
}

export { RegisterCustomer };
