import { ListCustomerController } from './ListCustomersController';
import { RegisterCustomerController } from './RegisterCustomerController';

const registerCustomerController = new RegisterCustomerController();
const listCustomerController = new ListCustomerController();

export { registerCustomerController, listCustomerController };
