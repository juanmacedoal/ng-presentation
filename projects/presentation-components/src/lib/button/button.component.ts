import { Component, Input } from '@angular/core';

@Component({
  selector: 'san-presn-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() id: string;
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() type: 'submit' | 'button' | 'reset' = 'button';
  
  constructor() {}
}
