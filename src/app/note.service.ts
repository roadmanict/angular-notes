import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewNote as NoteFormData, Note } from './note.model';

let id = 0;

const createNote = (title: string, body: string): Note => {
  return { id: `${id++}`, title, body };
};

const notes: Note[] = [
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
      subscriber.next(notes);
    });
  }

  public createNote(note: NoteFormData): Observable<Note> {
    return new Observable((subscriber) => {
      let savedNote: Note = { id: `${id++}`, ...note };
      notes.push(savedNote);

      subscriber.next(savedNote);
    });
  }
}
