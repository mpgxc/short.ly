import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCustomers } from '@app/customer/ListCustomers';

class ListCustomerController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listCustomers = container.resolve(ListCustomers);

      const customers = await listCustomers.run();

      return response.status(200).json(customers);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
}

export { ListCustomerController };
