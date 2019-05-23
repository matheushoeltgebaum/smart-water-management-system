import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyConsumptionComponent } from './yearly-consumption.component';

describe('YearlyConsumptionComponent', () => {
  let component: YearlyConsumptionComponent;
  let fixture: ComponentFixture<YearlyConsumptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearlyConsumptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
