import { inject, injectable } from 'tsyringe';

import { InjectableModules } from '@app/container/InjectableModules';
import { ICustomerRepository } from '@domain/customer/ICustomerRepository';
import { ILinksRepository, Links, URL } from '@domain/links';
import { ILinkShortenerProvider } from '@infra/providers/LinkShortener';

import { CreateShortenedLinkView } from './CreateShortenedLinkView';
import { ResponseShortenedLink } from './ResponseShortenedLink';

type ShortenedLinkRequest = {
  url: string;
  customer_id: string;
};

@injectable()
class CreateShortenedLink {
  constructor(
    @inject(InjectableModules.LINKS_REPOSITORY)
    private readonly linksRepository: ILinksRepository,

    @inject(InjectableModules.CUSTOMER_REPOSITORY)
    private readonly customersRepository: ICustomerRepository,

    @inject(InjectableModules.LINK_SHORTENER_PROVIDER)
    private readonly linkShortenerProvider: ILinkShortenerProvider,
  ) {}

  async run({
    customer_id,
    url,
  }: ShortenedLinkRequest): Promise<ResponseShortenedLink> {
    const customer = await this.customersRepository.findById(customer_id);

    if (!customer) {
      throw new Error('Customer not found');
    }

    const instanceURL = URL.build(url);

    if (!instanceURL.value) {
      throw new Error('Invalid URL!');
    }

    const urlAlreadyExists = await this.linksRepository.findByURL(
      instanceURL.value,
    );

    if (urlAlreadyExists) {
      throw new Error(`URL already exists!`);
    }

    const { token } = this.linkShortenerProvider.build();

    const links = Links.build({
      token,
      url: instanceURL,
      customerId: customer_id,
    });

    await this.linksRepository.save(links);

    const { qrcode_url, short_url } = CreateShortenedLinkView.build(token);

    return {
      qrcode_url,
      short_url,
    };
  }
}

export { CreateShortenedLink };
