import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'san-presn-user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent implements OnInit {
  @Input() public username: string;

  constructor() {}

  ngOnInit(): void {}
}
