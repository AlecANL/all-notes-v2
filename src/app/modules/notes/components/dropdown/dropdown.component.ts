import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  isShowDropDown: boolean = false;

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    if (this.isEditNote) {
      this.noteService.setEditMode = this.isPrivateNote;
    }
  }

  get isEditNote() {
    return this.noteService.isEditMode;
  }

  get isPrivateNote() {
    return this.noteService.isPrivate;
  }

  handleTypeNote(isPrivate: boolean) {
    this.noteService.setPrivateNote = isPrivate;
    this.handleToggleDropDown();
  }

  handleToggleDropDown() {
    this.isShowDropDown = !this.isShowDropDown;
  }
}
