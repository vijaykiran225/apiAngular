import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDisputesComponent } from './list-disputes.component';

describe('ListDisputesComponent', () => {
  let component: ListDisputesComponent;
  let fixture: ComponentFixture<ListDisputesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDisputesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDisputesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
