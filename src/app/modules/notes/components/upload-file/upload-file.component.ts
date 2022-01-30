import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btn-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {
  isLoadingFile: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
