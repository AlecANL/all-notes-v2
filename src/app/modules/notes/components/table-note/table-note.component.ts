import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}
}
