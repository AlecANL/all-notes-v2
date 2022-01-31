import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CopyService } from '@core/services/copy.service';
import { UploadFileService } from '@core/services/upload-file.service';

@Component({
  selector: 'btn-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss'],
})
export class UploadFileComponent implements OnInit {
  @ViewChild('file') fileElement!: ElementRef<HTMLInputElement>;

  constructor(
    private uploadFileService: UploadFileService,
    private copyService: CopyService
  ) {}

  ngOnInit(): void {}

  get fileName() {
    return this.uploadFileService.file;
  }

  get ulrFile() {
    return this.uploadFileService.ulrFile;
  }

  get isLoadingFile() {
    return this.uploadFileService.isLoadingUploadFile;
  }

  handleUploadFile() {
    if (!this.isLoadingFile) {
      const file = this.fileElement.nativeElement.files?.[0];
      this.uploadFileService.onUploadFile(file, 'image');
    }
  }

  handleCopyImageUrl() {
    this.copyService.onCopy(this.ulrFile);
  }
}
