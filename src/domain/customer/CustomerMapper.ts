import { Customer as PersistenceLinks } from '@prisma/client';

import { Customer } from './Customer';

type PersistenceProps = {
  name: string;
  user_name: string;
  email: string;
  password: string;
  bio: string;
  avatar: string;
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

  static toPersistence(customer: Customer): PersistenceProps {
    return {
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
