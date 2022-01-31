import { Injectable } from '@angular/core';
import { UploadFileService } from './upload-file.service';
import { ToastService } from 'angular-toastify';

@Injectable({
  providedIn: 'root',
})
export class CopyService {
  constructor(
    private uploadFile: UploadFileService,
    private toastService: ToastService
  ) {}

  async onCopy(fileToCopy: string) {
    try {
      await navigator.clipboard.writeText(fileToCopy);
      this.uploadFile.setFile = '';
      this.uploadFile.setUrl = '';
      this.uploadFile.setIsLoading = false;
      this.toastService.success('Image Copied!!');
    } catch (error) {
      this.toastService.error('Whoops was happen to tyr use your clipboard :(');
      throw new Error('whoops cannot use ClipBoarAPI');
    }
  }
}
