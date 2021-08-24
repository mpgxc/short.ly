import { AccountFactory } from '@domain/account/AccountFactory';
import { Logger } from '@infra/providers/Logger';

const accounts = AccountFactory.buildAccount('Customer', {
    email: 'Testes@gmail.com    ',
    name: 'Mateus Pinto garcia',
    password: '123456789',
    role: 'Administrator',
    user_name: 'mpgxc',
});

Logger.info(accounts);
