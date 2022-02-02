import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '@core/services/http.service';
import { switchMap } from 'rxjs';
import { TNote } from '../../models/note.interface';
import * as Prisma from 'prismjs';
import { NoteService } from '@modules/notes/services/note.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-note-id',
  templateUrl: './note-id.component.html',
  styleUrls: ['./note-id.component.scss'],
})
export class NoteIdComponent implements OnInit, AfterViewChecked {
  private noteId: string = '';
  public isLoading: boolean = true;
  public isError: boolean = false;
  public note: TNote | null = null;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private noteService: NoteService,
    private router: Router
  ) {
    this.activatedRoute.params
      .pipe(
        tap(({ id }) => {
          this.noteId = id;
        }),
        switchMap(({ id }) => this.httpService.getNote(id))
      )
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

  get isShowButtonEdit() {
    const noteUser = this.note?.user.nickname;
    const currentName = this.noteService.user?.nickname;
    return noteUser === currentName;
  }

  handleEditMode() {
    if (!this.noteId) {
      console.error('whoops for reason dont get id note :(');
      return;
    }
    this.router.navigateByUrl(`/notes/new?id=${this.noteId}`);
  }

  ngOnInit(): void {}
}
