import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '@core/services/http.service';
import { switchMap } from 'rxjs';
import { TNote } from '../../models/note.interface';
import * as Prisma from 'prismjs';

@Component({
  selector: 'app-note-id',
  templateUrl: './note-id.component.html',
  styleUrls: ['./note-id.component.scss'],
})
export class NoteIdComponent implements OnInit, AfterViewChecked {
  isLoading: boolean = true;
  isError: boolean = false;
  note: TNote | null = null;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.httpService.getNote(id)))
      .subscribe(
        (data) => {
          this.isLoading = false;
          this.isError = false;
          this.note = data.note;
        },
        () => {
          this.note = null;
          this.isLoading = false;
          this.isError = true;
        }
      );
  }
  ngAfterViewChecked(): void {
    Prisma.highlightAll();
  }

  ngOnInit(): void {}
}
