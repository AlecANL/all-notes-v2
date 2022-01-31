import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TNote } from '@modules/notes/models/note.interface';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  @Input() note!: TNote;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onLoadNoteById(id: string) {
    this.router.navigateByUrl(`/notes/note/${id}`);
  }
}
