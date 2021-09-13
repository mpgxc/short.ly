import { nanoid } from 'nanoid';

import {
  ILinkShortenerProvider,
  LinkShortenerResponse,
} from '../ILinkShortenerProvider';

class NanoIdShortener implements ILinkShortenerProvider {
  build(): LinkShortenerResponse {
    const size_token = 6;

    const token = nanoid(size_token);

    return {
      token,
    };
  }
}

export { NanoIdShortener };
