import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note, Entity } from './note.model';

let id = 0;

const createNote = (title: string, body: string): Entity<Note> => {
  return { id: `${id++}`, title, body };
};

const notes: Entity<Note>[] = [
  createNote('A note', 'THe body of a note, something interesting'),
  createNote('Another note', 'THe body of a note, not something interesting'),
];

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor() {}

  public getNotes(): Observable<Note[]> {
    return new Observable((subscriber) => {
      subscriber.next(JSON.parse(JSON.stringify(notes)));
    });
  }

  public createNote(note: Note): Observable<Entity<Note>> {
    return new Observable((subscriber) => {
      let savedNote: Entity<Note> = { id: `${id++}`, ...note };
      notes.push(savedNote);

      subscriber.next(savedNote);
    });
  }

  public updateNote(id: string, updatedNote: Note): Observable<Entity<Note>> {
    return new Observable((subscriber) => {
      let existingNode = notes.find((n) => n.id === id);
      if (!existingNode) {
        subscriber.next();

        return;
      }
      existingNode.body = updatedNote.body;
      existingNode.title = updatedNote.title;

      subscriber.next(existingNode);
    });
  }
}
