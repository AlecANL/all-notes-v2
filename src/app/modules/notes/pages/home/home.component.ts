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
  isLoading: boolean = true;

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
      return;
    }
    this.httpService.getNotesByUser(username).subscribe((data) => {
      this._notesByName = data;
      this.isLoading = false;
    });
    this.noteService.setCurrentNote = null;
    this.noteService.setEditMode = false;
  }
}
