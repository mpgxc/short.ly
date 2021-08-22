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
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_+.~#?&//=]*)/;

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
