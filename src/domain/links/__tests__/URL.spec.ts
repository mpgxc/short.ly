import { URL } from '../URL';

describe('URL', () => {
    it('should be able to create a valid url property!', () => {
        const repoUrl1 = URL.build('https://www.github.com/mpgxc/mp__gxc');
        const repoUrl2 = URL.build('https://github.com/mpgxc/short.ly');
        const repoUrl3 = URL.build('https://www.github.com/mpgxc/chal-leng.e');

        expect(repoUrl1.value).toBeTruthy();
        expect(repoUrl2.value).toBeTruthy();
        expect(repoUrl3.value).toBeTruthy();

        expect(repoUrl1.value).toBe('https://www.github.com/mpgxc/mp__gxc');
    });

    it('should not be able to create short URL with incorrect format!', () => {
        const repoUrl4 = URL.build(
            'https://github.com/mpgxc/challenge/tree/    ',
        );

        const repoUrl5 = URL.build('https://github.com/mpgxc/challenge    /');
        const repoUrl6 = URL.build('https://github.com/mpgxc/challenge   ');

        expect(repoUrl4.value).toBeFalsy();
        expect(repoUrl4.value).toEqual(null);

        expect(repoUrl5.value).toBeFalsy();
        expect(repoUrl5.value).toEqual(null);

        expect(repoUrl6.value).toBeFalsy();
        expect(repoUrl6.value).toEqual(null);
    });
});
