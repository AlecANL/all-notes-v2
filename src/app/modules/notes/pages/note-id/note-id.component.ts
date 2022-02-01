import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '@core/services/http.service';
import { switchMap } from 'rxjs';
import { TNote } from '../../models/note.interface';
import * as Prisma from 'prismjs';
import { NoteService } from '@modules/notes/services/note.service';

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
    private activatedRoute: ActivatedRoute,
    private noteService: NoteService,
    private router: Router
  ) {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.httpService.getNote(id)))
      .subscribe(
        (data) => {
          this.isLoading = false;
          this.isError = false;
          this.note = data.note;
          this.noteService.setCurrentNote = data.note;
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
    const noteUser = this.noteService.currentNote?.user.nickname;
    const currentName = this.noteService.user?.nickname;

    return noteUser === currentName;
  }

  handleEditMode() {
    this.noteService.setEditMode = true;
    const noteId = this.noteService.currentNote?.id;
    this.router.navigateByUrl(`/notes/new?id=${noteId}`);
  }

  ngOnInit(): void {}
}
