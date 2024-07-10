import { Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { EditNoteComponent } from './notes/edit-note/edit-note.component';

export const routes: Routes = [
  {
    path: 'home',
    component: NotesComponent,
    title: 'Notes',
    pathMatch: 'full',
  },
  {
    path: 'notes/:id',
    component: EditNoteComponent,
    title: 'Notes',
    pathMatch: 'full',
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
