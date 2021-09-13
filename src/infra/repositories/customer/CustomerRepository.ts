import { Customer } from '@domain/customer/Customer';
import { CustomerMapper } from '@domain/customer/CustomerMapper';
import { ICustomerRepository } from '@domain/customer/ICustomerRepository';
import { prisma } from '@infra/database/prisma';

class CustomerRepository implements ICustomerRepository {
    async list(): Promise<Customer[]> {
        const customers = await prisma.customer.findMany();

        return customers.map(CustomerMapper.toDomain);
    }

    async save(customer: Customer): Promise<void> {
        const data = CustomerMapper.toPersistence(customer);

        await prisma.customer.create({
            data,
        });
    }
}

export { CustomerRepository };
