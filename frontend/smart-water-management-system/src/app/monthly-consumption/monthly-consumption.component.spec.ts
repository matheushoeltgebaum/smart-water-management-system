import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyConsumptionComponent } from './monthly-consumption.component';

describe('MonthlyConsumptionComponent', () => {
  let component: MonthlyConsumptionComponent;
  let fixture: ComponentFixture<MonthlyConsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyConsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
