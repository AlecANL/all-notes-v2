import { Component, OnInit } from '@angular/core';

import { IMenuNav } from '@shared/models/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuNav: IMenuNav[] = [
    {
      path: '/notes/home',
      name: 'My Notes',
      icon: 'icon-my_notes',
    },
    {
      path: '/notes/all',
      name: 'All Notes',
      icon: 'icon-all_notes',
    },
  ];
  currentPath: string = '';

  constructor() {}

  ngOnInit(): void {}
}
