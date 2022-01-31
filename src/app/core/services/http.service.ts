import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, from, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ISingleNote, TNote } from '../../modules/notes/models/note.interface';
import {
  INote,
  INoteResponse,
} from '../../modules/notes/models/note.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrlApi: string = environment.baseApiNotes;

  constructor(private http: HttpClient) {}

  getNote(id: string) {
    return this.http.get<ISingleNote>(`${this.baseUrlApi}/notes/${id}`);
  }

  getPublicNotes() {
    return this.http.get<INoteResponse>(`${this.baseUrlApi}/notes`).pipe(
      map((data) => {
        const n = data.notes.filter((x) => x.isPrivate === false);
        return n;
      })
    );
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
