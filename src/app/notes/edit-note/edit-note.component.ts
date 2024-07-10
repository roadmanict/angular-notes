import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteId } from '../note.model';

@Component({
  selector: 'app-edit-note',
  standalone: true,
  imports: [],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.css',
})
export class EditNoteComponent implements OnInit {
  public id: NoteId | undefined;
  public constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = NoteId.fromUnknown(params['id']);
    });
  }
}
