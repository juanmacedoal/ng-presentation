import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LoggerService } from 'projects/ngx-core/src/public-api';
import { TableEvent } from './table-event.enum';

@Component({
  selector: 'san-presn-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  private ORDER_ACS = 'ACS';
  private ORDER_DES = 'DES';

  @Input() columns: Column[];

  @Input() data: any;

  @Input() loading: boolean;

  @Output() action = new EventEmitter<{ event: TableEvent; data?: any }>();

  constructor(private logger: LoggerService) {}

  rowAction(row: any): void {
    this.action.emit({
      event: TableEvent.EVENT_ROW,
      data: row
    });

    this.logger.debug('TableComponent : rowAction ::', row);
  }

  orderAction(column: Column): void {
    column.order =
      column.order === this.ORDER_ACS ? this.ORDER_DES : this.ORDER_ACS;

    this.action.emit({
      event: TableEvent.EVENT_COLUMN,
      data: column
    });

    this.logger.debug('TableComponent : orderAction ::', column);
  }

  pageAction(): void {
    this.action.emit({
      event: TableEvent.EVENT_PAGE
    });

    this.logger.debug('TableComponent : pageAction');
  }
}

export class Column {
  key: string;
  name: string;
  className: string;
  witdh?: string;
  order: string;
}
