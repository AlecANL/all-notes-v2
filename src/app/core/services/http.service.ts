import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, from, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {
  ISingleNote,
  TNote,
  IPostNote,
} from '../../modules/notes/models/note.interface';
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

  getNotesByUser(name: string) {
    return this.http.get<INoteResponse>(`${this.baseUrlApi}/notes`).pipe(
      map((note) => {
        const n = note.notes.filter((x) => x.user.nickname === name);
        return n;
      })
    );
  }

  postNote(note: IPostNote) {
    return this.http.post<ISingleNote>(`${this.baseUrlApi}/notes`, note);
  }

  updateNot(note: INote, id: string) {
    return this.http.put<ISingleNote>(`${this.baseUrlApi}/notes/${id}`, note);
  }

  deleteNote(id: string) {
    return this.http.delete(`${this.baseUrlApi}/notes/${id}`);
  }

  onUploadFile<T = any>(endPoint: string, formData: FormData): Observable<T> {
    return this.http.post<T>(
      `${environment.baseApiUploadFile}${endPoint}`,
      formData
    );
  }
}
