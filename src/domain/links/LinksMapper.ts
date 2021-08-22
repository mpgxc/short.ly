import { Links } from './Links';
import { URL } from './URL';

type PersistenceProps = {
    id: string;
    token: string;
    url: string;
};

class LinksMapper {
    static toDomain({ id, token, url }: PersistenceProps): Links {
        return Links.build(
            {
                token,
                url: URL.build(url),
            },
            id,
        );
    }

    static toPersistence(links: Links): PersistenceProps {
        return {
            id: links.id,
            token: links.token,
            url: links.url,
        };
    }
}

export { LinksMapper };
