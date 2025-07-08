import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

/**
 * Root component containing the layout and global app state.
 * Houses the sidebar navigation and main content area for notes app.
 */
// PUBLIC_INTERFACE
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NoteNest';
}
