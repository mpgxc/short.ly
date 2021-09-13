class URL {
  private constructor(private readonly _value: string) {}

  private static format(value: string): string {
    return value.replace(/\s/g, '').toLowerCase();
  }

  private static validate(value: string): boolean {
    const pattern =
      /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?$/;

    if (!pattern.test(value)) {
      return false;
    }

    return true;
  }

  get value(): string {
    return this._value;
  }

  public static build(value: string): URL {
    if (!this.validate(value)) {
      return new URL(null);
    }

    return new URL(value);
  }
}

export { URL };
