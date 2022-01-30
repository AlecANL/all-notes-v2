import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';

import { NewComponent } from './pages/new/new.component';
import { HomeComponent } from './pages/home/home.component';
import { AllComponent } from './pages/all/all.component';
import { NoteIdComponent } from './pages/note-id/note-id.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { TableNoteComponent } from './components/table-note/table-note.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewComponent,
    HomeComponent,
    AllComponent,
    NoteIdComponent,
    DropdownComponent,
    UploadFileComponent,
    TableNoteComponent,
  ],
  imports: [CommonModule, NotesRoutingModule, ReactiveFormsModule],
})
export class NotesModule {}
