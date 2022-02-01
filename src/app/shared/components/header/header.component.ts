import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { NoteService } from '@modules/notes/services/note.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router, private noteService: NoteService) {}

  ngOnInit(): void {}

  toNew() {
    this.router.navigateByUrl('/notes/new');
    this.noteService.setCurrentNote = null;
    this.noteService.setEditMode = false;
    this.noteService.setNoteContent = '# 👋 Hello World!';
  }
}
