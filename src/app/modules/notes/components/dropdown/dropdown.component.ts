import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  isShowDropDown: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  handleToggleDropDown() {
    this.isShowDropDown = !this.isShowDropDown;
  }
}
