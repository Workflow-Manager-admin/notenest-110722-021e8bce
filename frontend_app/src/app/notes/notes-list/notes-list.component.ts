import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgForOf, SlicePipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Note } from '../../models/note.model';
import { Tag } from '../../models/tag.model';

/**
 * Shows a searchable and filterable list of notes with tag filters.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule, SlicePipe, DatePipe, NgIf, NgForOf]
})
export class NotesListComponent implements OnInit {
  notes: Note[] = [];
  search = '';
  tags: Tag[] = [];
  selectedTag: string = '';
  isLoading = false;
  errorMsg = '';

  constructor() {}

  ngOnInit(): void {}
  loadTags() {}
  loadNotes() {}
  onSearchKeyup(event: KeyboardEvent) { void event; }
  onTagSelected(tag: string) { void tag; }
  clearTag() {}
  goToNote(noteId: string) { void noteId; }
  goToCreate() {}
}
