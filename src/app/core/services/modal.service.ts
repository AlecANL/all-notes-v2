import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _isShowUserModal: boolean = false;

  get isShowUserModal() {
    return this._isShowUserModal;
  }

  set setIsShowUserModal(isShow: boolean) {
    this._isShowUserModal = isShow;
  }
}
