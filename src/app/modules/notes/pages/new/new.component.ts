import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ModalService } from '@core/services/modal.service';
import * as Prism from 'prismjs';
import { NoteService } from '../../services/note.service';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../../../core/services/http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
})
export class NewComponent implements OnInit, AfterViewChecked {
  constructor(
    private noteService: NoteService,
    private modalService: ModalService,
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) {
    // this.activatedRoute.queryParams.subscribe((data) => {
    //   if (data['id']) {
    //     this.getNote(data['id']);
    //   }
    // });
  }

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
    Prism.highlightAll();
  }

  // getNote(id: string) {
  //   this.httpService.getNote(id).subscribe((note) => {
  //     this.noteService.setEditMode = true;

  //     this.noteService.setNoteContent = note.note.note;
  //     this.noteService.setPrivateNote = note.note.isPrivate;
  //     this.noteService.setCurrentNote = note.note;
  //   });
  // }

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
    // this.noteService.updateCurrentNote(this.)
  }
}
