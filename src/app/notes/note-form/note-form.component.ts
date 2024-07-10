import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Note } from '../note.model';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.css',
})
export class NoteFormComponent {
  @Input() public id: string | undefined;
  public noteForm: Note = { title: '', body: '' };

  @Output() public onSave = new EventEmitter();

  public constructor(private readonly noteService: NoteService) {}

  public saveForm(): void {
    this.noteService.createNote(this.noteForm).subscribe({
      next: (note) => {
        this.noteForm.title = '';
        this.noteForm.body = '';

        this.onSave.emit(note);
      },
    });
  }
}
