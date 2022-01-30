import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';

import { NewComponent } from './pages/new/new.component';
import { HomeComponent } from './pages/home/home.component';
import { AllComponent } from './pages/all/all.component';
import { NoteIdComponent } from './pages/note-id/note-id.component';

@NgModule({
  declarations: [NewComponent, HomeComponent, AllComponent, NoteIdComponent],
  imports: [CommonModule, NotesRoutingModule],
})
export class NotesModule {}
