import { Injectable } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { SaveStorage } from '@core/services/save-storage.service';
import { IPostNote, IUser, INote, TNote } from '../models/note.interface';
import { ToastService } from 'angular-toastify';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private _isPrivate: boolean = false;
  private _isEditMode: boolean = false;
  private _user: IUser | null = null;
  private _noteContent: string = '# 👋 Hello World!';
  private _currentNote: TNote | null = null;

  constructor(
    private saveToStorage: SaveStorage,
    private httpService: HttpService,
    private toastService: ToastService,
    private router: Router
  ) {
    this.onLoadUser();
  }

  set setNoteContent(value: string) {
    this._noteContent = value;
  }

  set setPrivateNote(isPrivate: boolean) {
    this._isPrivate = isPrivate;
  }

  set setEditMode(isEdit: boolean) {
    this._isEditMode = isEdit;
  }

  set setCurrentNote(note: TNote | null) {
    this._currentNote = note;
  }

  get currentNote() {
    return this._currentNote;
  }

  get user() {
    return this._user;
  }

  get isPrivate() {
    return this._isPrivate;
  }

  get noteContent() {
    return this._noteContent;
  }

  get isEditMode() {
    return this._isEditMode;
  }

  createNewNote() {
    if (!this.user || !this._noteContent) {
      return;
    }
    const note: IPostNote = {
      isPrivate: this._isPrivate,
      note: this._noteContent,
      user: this.user,
    };
    // if (this.isEditMode) {
    //   this.updateCurrentNote(note);
    //   this.setEditMode = false;
    //   this.setNoteContent = '# 👋 Hello World!';
    //   return;
    // }
    // this.setNoteContent = '# 👋 Hello World!';
    // this.setPrivateNote = false;
    this.httpService.postNote(note).subscribe((note) => {
      this.toastService.success('Note Created Successfully 🚀 !!');
      this.router.navigateByUrl(`/notes/note/${note.note.id}`);
    });
  }

  deleteCurrentNote(id: string) {
    this.httpService.deleteNote(id).subscribe(() => {
      this.toastService.info('Note Deleted!!');
      this.router.navigateByUrl('/notes/all');
    });
  }

  updateCurrentNote(note: INote) {
    // this.httpService
    //   .updateNot(note, `${this.currentNote?.id}`)
    //   .subscribe((data) => {
    //     this.toastService.success('Note Updated Successfully 🚀 !!');
    //     this.setEditMode = false;
    //     this.setCurrentNote = null;
    //     this.router.navigateByUrl(`/notes/note/${data.note.id}`);
    //   });
    // this.setCurrentNote = null;
  }

  /* ================ Create User ================== */
  createUser(avatar: string, name: string, id: string) {
    const user: IUser = {
      nickname: name,
      avatar,
      id,
    };
    this._user = { ...user };
    this.saveToStorage.onSaveToStorage<IUser>('notes_user_v1', user);
  }

  onLoadUser() {
    const user =
      this.saveToStorage.onGetToStorage<IUser>('notes_user_v1') || null;

    if (!user) {
      console.error('whoops does exists data with key:');
      return;
    }

    this._user = user;
  }
}
