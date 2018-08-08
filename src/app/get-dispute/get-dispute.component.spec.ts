import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDisputeComponent } from './get-dispute.component';

describe('GetDisputeComponent', () => {
  let component: GetDisputeComponent;
  let fixture: ComponentFixture<GetDisputeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDisputeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDisputeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
