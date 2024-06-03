import { Component, OnInit } from '@angular/core';
import { Note } from '../note.model';
import { NoteService } from '../note.service';
import { CommonModule } from '@angular/common';
import { NoteFormComponent } from '../note-form/note-form.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, NoteFormComponent],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
})
export class NotesComponent implements OnInit {
  public notes: Note[] | undefined;

  public constructor(private readonly noteService: NoteService) {}

  public ngOnInit(): void {
    this.getNotes();
  }

  public getNotes(): void {
    this.noteService.getNotes().subscribe((notes) => {
      this.notes = notes;
    });
  }
}
