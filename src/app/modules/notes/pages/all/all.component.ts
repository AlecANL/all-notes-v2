import { Component, OnInit } from '@angular/core';
import { HttpService } from '@core/services/http.service';
import { TNote } from '@modules/notes/models/note.interface';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  private _notePublicNotes: TNote[] = [];
  public isLoading: boolean = true;
  public isError: boolean = false;
  public error: string | null = null;

  get publicNotes() {
    return [...this._notePublicNotes];
  }
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.onLoadAllPublicNotes();
  }

  onLoadAllPublicNotes() {
    this.httpService.getPublicNotes().subscribe(
      (noteList) => {
        this._notePublicNotes = [...noteList];
        this.isLoading = false;
      },
      (error) => {
        this.error = error;
        this.isLoading = false;
        this.isError = true;
        this._notePublicNotes = [];
      }
    );
  }
}
