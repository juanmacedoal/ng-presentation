import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPresnComponent } from './ngx-presn.component';

describe('NgxPresnComponent', () => {
  let component: NgxPresnComponent;
  let fixture: ComponentFixture<NgxPresnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPresnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPresnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
