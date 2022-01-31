import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '@modules/notes/services/note.service';

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

  constructor(private fb: FormBuilder, private noteService: NoteService) {}

  ngOnInit(): void {
    if (this.isEditNote) {
      const noteValue = this.noteService.noteContent;
      this.noteForm.get('note')?.reset(noteValue);
    }
  }

  get isEditNote() {
    return this.noteService.isEditMode;
  }

  handleSetNoteContent() {
    const note = this.noteForm.get('note')?.value;
    this.noteService.setMoteContent = note;
  }
}
