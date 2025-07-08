import { Component } from '@angular/core';
import { CommonModule, NgIf, NgForOf } from '@angular/common';

/**
 * Tag navigation page for displaying all tags.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-tags-page',
  templateUrl: './tags-page.component.html',
  styleUrl: './tags-page.component.css',
  standalone: true,
  imports: [CommonModule, NgIf, NgForOf]
})
export class TagsPageComponent {
  tags: any[] = [];
  loading = false;
  errorMsg = '';

  showNotesWithTag(tagName: string) {}
}
