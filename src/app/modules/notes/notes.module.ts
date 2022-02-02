import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotesRoutingModule } from './notes-routing.module';

import { SharedModule } from '@shared/shared.module';

import { NoteIdComponent } from './pages/note-id/note-id.component';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { AllComponent } from './pages/all/all.component';

import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { TableNoteComponent } from './components/table-note/table-note.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ModalComponent } from './components/modal/modal.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    NewComponent,
    HomeComponent,
    AllComponent,
    NoteIdComponent,
    DropdownComponent,
    UploadFileComponent,
    TableNoteComponent,
    ModalComponent,
    NoteCardComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    NotesRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class NotesModule {}
