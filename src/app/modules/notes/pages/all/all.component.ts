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
  isLoading: boolean = true;

  get publicNotes() {
    return [...this._notePublicNotes];
  }
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getPublicNotes().subscribe((n) => {
      this._notePublicNotes = n;
      this.isLoading = false;
    });
  }
}
