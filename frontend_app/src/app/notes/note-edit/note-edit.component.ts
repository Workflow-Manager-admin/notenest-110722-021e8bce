import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, NgIf, NgForOf } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';

/**
 * Component to create or edit a note, with tag management.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrl: './note-edit.component.css',
  standalone: true,
  imports: [CommonModule, NgIf, NgForOf, FormsModule, ReactiveFormsModule]
})
export class NoteEditComponent implements OnInit {
  form!: FormGroup;
  isEdit = false;
  noteId: string | null = null;
  tags: any[] = [];
  newTagName = '';
  isLoading = false;
  errorMsg = '';
  tagInputValue = '';

  constructor(public router: Router) {}

  ngOnInit() {}
  onSubmit() {}
  toggleTag(tag: string) {}
  hasTag(tag: string): boolean { return false; }
  addTag() {}
}
