import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LayoutComponent,
    RouterModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent]
})
export class UiModule { }
