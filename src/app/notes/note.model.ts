export type Entity<T> = { id: string } & T;

export type Note = {
  title: string;
  body: string;
};

export class NoteId {
  public static fromUnknown(id: unknown): NoteId {
    if (typeof id !== 'string') {
      throw Error('Invalid note id');
    }
    if (id.length === 0) {
      throw Error('Invalid note id');
    }

    return new NoteId(id);
  }

  private constructor(public readonly id: string) {}
}
