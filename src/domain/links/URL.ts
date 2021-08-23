class URL {
    private value: string;

    private constructor(value: string) {
        this.value = value;
    }

    private static format(value: string): string {
        return value.replace(/\s/g, '').toLowerCase();
    }

    private static validate(value: string): string | null {
        const pattern =
            /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

        if (!pattern.test(value)) {
            return null;
        }
        return value;
    }

    getValue(): string {
        return this.value;
    }

    static build(value: string): URL {
        const valueFormated = this.format(value);

        if (!this.validate(valueFormated)) {
            throw new Error('Invalid URL!');
        }

        return new URL(value);
    }
}

export { URL };
