import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewNote } from '../note.model';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-note-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.css',
})
export class NoteFormComponent {
  public id: string | undefined;
  public noteForm: NewNote = { title: '', body: '' };

  @Output() public onSave = new EventEmitter();

  public constructor(private readonly noteService: NoteService) {}

  public saveForm(): void {
    this.noteService.createNote(this.noteForm).subscribe((note) => {
      this.noteForm.title = '';
      this.noteForm.body = '';

      this.onSave.emit(note);
    });
  }
}
