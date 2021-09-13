import { EntityID } from './EntityID';

abstract class Entity<T> {
  protected readonly _id: string;
  public readonly props: T;

  get id(): string {
    return this._id;
  }

  constructor(props: T, id?: string) {
    this._id = id || EntityID.build();
    this.props = props;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public equals(object?: Entity<T>): boolean {
    throw new Error('Method not implemented');
  }
}

export { Entity };
