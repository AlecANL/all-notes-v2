import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ToHTML } from './pipes/tohtml.pipe';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MenuComponent, ToHTML],
  exports: [HeaderComponent, MenuComponent, ToHTML],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
