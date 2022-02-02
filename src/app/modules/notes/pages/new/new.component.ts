import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ModalService } from '@core/services/modal.service';
import * as Prism from 'prismjs';
import { NoteService } from '../../services/note.service';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../../core/services/http.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit, AfterViewChecked {
  private noteId: string = '';

  constructor(
    private noteService: NoteService,
    private modalService: ModalService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(({ id }) => {
      this.noteId = id;
    });
  }

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

    if (this.noteId) {
      this.handleEditNote(this.noteId);
      return;
    }

    this.noteService.createNewNote();
  }

  handleEditNote(id: string) {
    this.noteService.updateCurrentNote(id);
  }

  handleDeleteNote() {
    this.noteService.deleteCurrentNote(this.noteId);
  }
}
