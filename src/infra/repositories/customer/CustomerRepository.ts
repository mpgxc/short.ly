import { Customer } from '@domain/customer/Customer';
import {
  CustomerMapper,
  ListCustomerProps,
} from '@domain/customer/CustomerMapper';
import { ICustomerRepository } from '@domain/customer/ICustomerRepository';
import { prisma } from '@infra/database/prisma';

class CustomerRepository implements ICustomerRepository {
  async findById(id: string): Promise<Customer | null> {
    const customer = await prisma.customer.findUnique({
      where: {
        id,
      },
    });

    return customer ? CustomerMapper.toDomain(customer) : null;
  }

  async list(): Promise<ListCustomerProps[]> {
    const customers = await prisma.customer.findMany();

    return customers.map(CustomerMapper.toRender);
  }

  async save(customer: Customer): Promise<void> {
    const data = CustomerMapper.toPersistence(customer);

    await prisma.customer.create({
      data,
    });
  }
}

export { CustomerRepository };
