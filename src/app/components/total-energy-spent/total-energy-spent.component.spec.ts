import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalEnergySpentComponent } from './total-energy-spent.component';

describe('TotalEnergySpentComponent', () => {
  let component: TotalEnergySpentComponent;
  let fixture: ComponentFixture<TotalEnergySpentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalEnergySpentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalEnergySpentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
