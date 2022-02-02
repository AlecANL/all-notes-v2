import { Component, OnInit } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { SaveStorage } from '@core/services/save-storage.service';
import { NoteService } from '@modules/notes/services/note.service';
import { TNote, IUser } from '../../models/note.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private _notesByName: TNote[] = [];
  public isLoading: boolean = true;
  public isError: boolean = false;
  public error: string | null = null;

  constructor(
    private noteService: NoteService,
    private httpService: HttpService
  ) {}

  get notes() {
    return [...this._notesByName];
  }

  ngOnInit(): void {
    const username: string = this.noteService.user?.nickname as string;
    if (!username) {
      this._notesByName = [];
      this.isLoading = false;
      return;
    }
    this.onLoadNotesByName(username);
  }
  onLoadNotesByName(username: string) {
    this.httpService.getNotesByUser(username).subscribe(
      (data) => {
        this._notesByName = data;
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
        this.isError = true;
      }
    );
  }
}
