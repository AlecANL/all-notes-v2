import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ModalService } from '@core/services/modal.service';
import { v4 as uuid } from 'uuid';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'user-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('modal-content', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100),
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' })),
      ]),
    ]),
  ],
})
export class ModalComponent implements OnInit {
  username: string = '';
  avatar: string = '';

  avatars = [
    {
      name: 'robot1',
      url: 'https://res.cloudinary.com/app-notes/image/upload/v1635981287/bot1_prluz6.svg',
    },
    {
      name: 'robot2',
      url: 'https://res.cloudinary.com/app-notes/image/upload/v1635981735/bot2_etkbl1.svg',
    },
    {
      name: 'robot3',
      url: 'https://res.cloudinary.com/app-notes/image/upload/v1635981735/bot4_ltyzmz.svg',
    },
    {
      name: 'robot4',
      url: 'https://res.cloudinary.com/app-notes/image/upload/v1635981735/bot5_gvpya1.svg',
    },
    {
      name: 'robot5',
      url: 'https://res.cloudinary.com/app-notes/image/upload/v1635981735/bot7_p1fj7j.svg',
    },
    {
      name: 'robot6',
      url: 'https://res.cloudinary.com/app-notes/image/upload/v1635981735/bot3_pt7dxu.svg',
    },
    {
      name: 'robot7',
      url: 'https://res.cloudinary.com/app-notes/image/upload/v1635981735/bot6_zcg5xn.svg',
    },
    {
      name: 'robot8',
      url: 'https://res.cloudinary.com/app-notes/image/upload/v1635981737/bot10_rhu1va.svg',
    },
    {
      name: 'robot9',
      url: 'https://res.cloudinary.com/app-notes/image/upload/v1635981737/bot8_xgrmgg.svg',
    },
    {
      name: 'robot10',
      url: 'https://res.cloudinary.com/app-notes/image/upload/v1635981737/bot9_gtqc4g.svg',
    },
  ];

  constructor(
    private noteService: NoteService,
    private modalService: ModalService
  ) {}

  ngOnInit(): void {}

  get isShowUserModal() {
    return this.modalService.isShowUserModal;
  }

  onSetUsername(event: any) {
    const value = event.target.value;
    this.username = value;
  }

  handleSetAvatar(avatar: { name: string; url: string }) {
    this.avatar = avatar.url;
  }

  handleCreateNewUser() {
    if (!this.username || !this.avatar) {
      return;
    }
    this.noteService.createUser(this.avatar, this.username, uuid());
    this.toggleShowModal(false);
  }

  toggleShowModal(isShow: boolean) {
    this.modalService.setIsShowUserModal = isShow;
  }
}
