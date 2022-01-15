import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeBandComponent } from './time-band.component';

describe('TimeBandComponent', () => {
  let component: TimeBandComponent;
  let fixture: ComponentFixture<TimeBandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeBandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeBandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
