import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBarComponent } from './user-bar.component';

@NgModule({
  declarations: [UserBarComponent],
  imports: [CommonModule],
  exports: [UserBarComponent],
  providers: []
})
export class UserBarModule {}
