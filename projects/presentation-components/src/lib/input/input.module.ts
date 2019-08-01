import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, FormsModule],
  exports: [InputComponent],
  providers: []
})
export class InputModule {}
