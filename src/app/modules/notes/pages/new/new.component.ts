import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ModalService } from '@core/services/modal.service';
import * as Prism from 'prismjs';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit, AfterViewChecked {
  constructor(
    private noteService: NoteService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    Prism.highlightAll();
  }

  get isEditNote() {
    return this.noteService.isEditMode;
  }

  get currentUser() {
    return this.noteService.user;
  }

  openShowModal() {
    this.modalService.setIsShowUserModal = true;
  }

  handleCreateNote() {
    if (!this.currentUser) {
      return;
    }
    this.noteService.createNewNote();
  }

  handleEditNote() {
    // execute some code
  }
}
