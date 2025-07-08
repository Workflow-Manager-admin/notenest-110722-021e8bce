import { Routes } from '@angular/router';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { NoteDetailComponent } from './notes/note-detail/note-detail.component';
import { NoteEditComponent } from './notes/note-edit/note-edit.component';
import { TagsPageComponent } from './tags/tags-page/tags-page.component';

export const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'note/:id', component: NoteDetailComponent },
  { path: 'create', component: NoteEditComponent },
  { path: 'edit/:id', component: NoteEditComponent },
  { path: 'tags', component: TagsPageComponent }
];
