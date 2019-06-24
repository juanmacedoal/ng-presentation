import { Component } from '@angular/core';

@Component({
  selector: 'san-presn-ngx-presn',
  template: `
    <h1>Input</h1>
    <san-presn-input [label]="label"></san-presn-input>
    <h1>Button</h1>
    <san-presn-button [label]="label"></san-presn-button>
    <h1>Table</h1>
    <san-presn-table
      [columns]="table.columns"
      [data]="table.data"
      [loading]="true"
    >
    </san-presn-table>
    <hr />
    <br />
  `,
  styles: []
})
export class NgxPresnComponent {
  public label = 'Código Usuario';

  table = {
    columns: [
      {
        name: 'Column 1',
        key: 'column1',
        order: 'ASC'
      },
      {
        name: 'Column 2',
        key: 'column2'
      },
      {
        name: 'Column 3',
        key: 'column3'
      },
      {
        name: 'Column 4',
        key: 'column4'
      },
      {
        name: 'Column 5',
        key: 'column5'
      },
      {
        name: 'Column 6',
        key: 'column6'
      }
    ],
    data: [
      {
        column1: 'Foo',
        column2: 'Foo',
        column3: 'Foo',
        column4: 'Foo',
        column5: 'Foo',
        column6: 'Foo'
      }
    ]
  };

  constructor() {}
}
