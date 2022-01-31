import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ToHTML } from './pipes/tohtml.pipe';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ToHTML,
    LoaderComponent,
  ],
  exports: [HeaderComponent, MenuComponent, ToHTML, LoaderComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
