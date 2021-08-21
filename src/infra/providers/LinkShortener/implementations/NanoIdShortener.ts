import { nanoid } from 'nanoid';

import {
	ILinkShortenerProvider,
	LinkShortenerResponse,
} from '../ILinkShortenerProvider';

class NanoIdShortener implements ILinkShortenerProvider {
	build(): LinkShortenerResponse {
		const SIZE_NANOID = 6;

		const unique_id = nanoid(SIZE_NANOID);

		const short_url = `${process.env.BASE_URL}/api/short/${unique_id}`;
		const qrcode_url = `${process.env.BASE_URL}/api/qrcode/${unique_id}`;

		return {
			qrcode_url,
			short_url,
			unique_id,
		};
	}
}

export { NanoIdShortener };
