import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '@modules/notes/services/note.service';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '@core/services/http.service';

@Component({
  selector: 'table-note',
  templateUrl: './table-note.component.html',
  styleUrls: ['./table-note.component.scss'],
})
export class TableNoteComponent implements OnInit {
  noteForm: FormGroup = this.fb.group({
    note: [
      '# 👋 Hello World!',
      [Validators.required, Validators.minLength(20)],
    ],
  });

  constructor(
    private fb: FormBuilder,
    private noteService: NoteService,
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {
    this.activatedRoute.queryParams.subscribe((data) => {
      if (data['id']) {
        this.getNote(data['id']);
      } else {
        this.noteService.setNoteContent = '# 👋 Hello World!';
        this.noteService.setEditMode = false;
        this.noteForm.get('note')?.reset('# 👋 Hello World!');
      }
    });
  }

  getNote(id: string) {
    this.httpService.getNote(id).subscribe((note) => {
      this.noteService.setEditMode = true;
      this.noteService.setNoteContent = note.note.note;
      this.noteService.setPrivateNote = note.note.isPrivate;
      this.noteForm.get('note')?.reset(this.noteService.noteContent);
    });
  }

  ngOnInit(): void {}

  get isEditNote() {
    return this.noteService.isEditMode;
  }

  handleSetNoteContent() {
    const note = this.noteForm.get('note')?.value;
    this.noteService.setNoteContent = note;
  }
}
