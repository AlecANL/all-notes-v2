import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, MenuComponent],
  exports: [HeaderComponent, MenuComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
