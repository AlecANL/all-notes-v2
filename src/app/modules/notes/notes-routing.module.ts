import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllComponent } from './pages/all/all.component';
import { HomeComponent } from './pages/home/home.component';
import { NewComponent } from './pages/new/new.component';
import { NoteIdComponent } from './pages/note-id/note-id.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: { state: 'home' },
      },
      {
        path: 'new',
        component: NewComponent,
        data: { state: 'new' },
      },
      {
        path: 'note/:id',
        component: NoteIdComponent,
        data: { state: 'note/:id' },
      },
      {
        path: 'all',
        component: AllComponent,
        data: { state: 'all' },
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotesRoutingModule {}
