import { Injectable } from '@angular/core';
import { IUploadFileResponse } from '@core/models/upload-file.interface';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import { ToastService } from 'angular-toastify';

@Injectable({
  providedIn: 'root',
})
export class UploadFileService {
  private _file: string = '';
  private _url: string = '';
  private _isLoading: boolean = false;

  constructor(
    private httpService: HttpService,
    private toastService: ToastService
  ) {}

  set setFile(value: string) {
    this._file = value;
  }

  set setUrl(value: string) {
    this._url = value;
  }

  set setIsLoading(isLoading: boolean) {
    this._isLoading = isLoading;
  }

  get file() {
    return this._file;
  }

  get ulrFile() {
    return this._url;
  }

  get isLoadingUploadFile() {
    return this._isLoading;
  }

  isValidTypeFile(file: File, typeFileUploaded: string): boolean {
    if (!file) {
      return false;
    }
    const typeFile = file.type.split('/')[0].toLocaleLowerCase();
    if (typeFile !== typeFileUploaded.toLocaleLowerCase().trim()) return false;
    return true;
  }

  setFormData(file: File): FormData {
    const formData: FormData = new FormData();
    formData.append('file', file);
    formData.append('api_key', environment.api_key);
    formData.append('upload_preset', environment.upload_preset);
    return formData;
  }

  onUploadFile(file: File | undefined, typeFile: string) {
    if (!file) {
      return;
    }
    this._isLoading = true;
    if (!this.isValidTypeFile(file, typeFile)) {
      this.toastService.error('whoops select a valid file');
      this._isLoading = false;
      return;
    }
    const formFile = this.setFormData(file);
    try {
      this.httpService
        .onUploadFile<IUploadFileResponse>('/image/upload', formFile)
        .subscribe((file) => {
          this._file = file.original_filename;
          this._url = file.url;
          this._isLoading = false;
          this.toastService.success('Image Uploaded Successfully');
        });
    } catch (error) {
      console.error(error);
      this.toastService.error('whoops cannot upload image try again :(');
      throw new Error('whoops');
    }

    // const value :File = event.target.files[0]
  }
}
