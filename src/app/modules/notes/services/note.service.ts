import { Injectable } from '@angular/core';
import { SaveStorage } from '@core/services/save-storage.service';
import { IPostNote, IUser } from '../models/note.interface';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private _isPrivate: boolean = false;
  private _isEditMode: boolean = false;
  private _user: IUser | null = null;
  private _noteContent: string = '# 👋 Hello World!';

  constructor(private saveToStorage: SaveStorage) {
    this.onLoadUser();
  }

  set setMoteContent(value: string) {
    this._noteContent = value;
  }

  set setPrivateNote(isPrivate: boolean) {
    this._isPrivate = isPrivate;
  }

  set setEditMode(isEdit: boolean) {
    this._isEditMode = isEdit;
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
    console.log(note);
  }

  createUser(avatar: string, name: string, id: string) {
    const user: IUser = {
      username: name,
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
