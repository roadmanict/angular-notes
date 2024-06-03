export type Note = {
  id: string;
  title: string;
  body: string;
};

export type NewNote = Omit<Note, 'id'>;
