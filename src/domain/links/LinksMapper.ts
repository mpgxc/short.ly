import { Links as PersistenceLinks } from '@prisma/client';

import { Links } from './Links';
import { URL } from './URL';

type PersistenceProps = {
    id: string;
    token: string;
    url: string;
    customer_id: string;
};

class LinksMapper {
    static toDomain({ id, token, url, customer_id }: PersistenceLinks): Links {
        return Links.build(
            {
                token,
                url: URL.build(url),
                customerId: customer_id,
            },
            id,
        );
    }

    static toPersistence(links: Links): PersistenceProps {
        return {
            id: links.id,
            token: links.token,
            url: links.url,
            customer_id: links.customerId,
        };
    }
}

export { LinksMapper };
