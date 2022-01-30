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
      },
      {
        path: 'new',
        component: NewComponent,
      },
      {
        path: 'note/:id',
        component: NoteIdComponent,
      },
      {
        path: 'all',
        component: AllComponent,
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
