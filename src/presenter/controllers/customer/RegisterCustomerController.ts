import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { RegisterCustomer } from '@app/customer/RegisterCustomer';

type RegisterCustomerRequest = {
  name: string;
  user_name: string;
  email: string;
  password: string;
  bio: string;
};

class RegisterCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { bio, email, name, password, user_name } =
        request.body as RegisterCustomerRequest;

      const registerCustomer = container.resolve(RegisterCustomer);

      await registerCustomer.run({
        bio,
        email,
        name,
        password,
        user_name,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { RegisterCustomerController };
