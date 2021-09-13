import { Customer as PersistenceLinks } from '@prisma/client';

import { Customer } from './Customer';

type PersistenceProps = {
  id: string;
  name: string;
  user_name: string;
  email: string;
  password: string;
  bio: string;
  avatar: string;
};

export type ListCustomerProps = Partial<PersistenceLinks> & {
  created_at: Date;
  updated_at: Date;
};

class CustomerMapper {
  static toDomain({
    id,
    avatar,
    bio,
    email,
    name,
    password,
    user_name,
  }: PersistenceLinks): Customer {
    return Customer.build(
      {
        avatar,
        bio,
        email,
        name,
        password,
        user_name,
      },
      id,
    );
  }

  static toRender(customer: PersistenceLinks): ListCustomerProps {
    return {
      id: customer.id,
      avatar: customer.avatar,
      bio: customer.bio,
      email: customer.email,
      name: customer.name,
      user_name: customer.user_name,
      created_at: customer.created_at,
      updated_at: customer.updated_at,
    };
  }

  static toPersistence(customer: Customer): PersistenceProps {
    return {
      id: customer.id,
      avatar: customer.avatar,
      bio: customer.bio,
      email: customer.email,
      name: customer.name,
      password: customer.password,
      user_name: customer.userName,
    };
  }
}

export { CustomerMapper };
