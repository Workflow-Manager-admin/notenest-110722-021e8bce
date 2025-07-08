import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe, NgIf, NgForOf } from '@angular/common';
import { Note } from '../../models/note.model';

/**
 * Shows a single note, with delete and edit actions.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css',
  standalone: true,
  imports: [CommonModule, DatePipe, NgIf, NgForOf]
})
export class NoteDetailComponent implements OnInit {
  note: Note | null = null;
  isLoading = false;
  errorMsg = '';

  ngOnInit() {}
  loadNote() {}
  goToEdit() {}
  deleteNote() {}
}
