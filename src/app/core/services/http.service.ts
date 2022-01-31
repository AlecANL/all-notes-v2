import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getNote<T = any>() {
    return this.http.get<T>('');
  }

  postNote<T = any>(note: any) {
    return this.http.post<T>('', note);
  }

  updateNote<T = any>(note: any) {
    return this.http.put<T>('', note);
  }

  deleteNote<T = any>(id: string) {
    return this.http.delete('');
  }

  onUploadFile<T = any>(endPoint: string, formData: FormData): Observable<T> {
    return this.http.post<T>(
      `${environment.baseApiUploadFile}${endPoint}`,
      formData
    );
  }
}
