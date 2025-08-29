import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableAComponent } from './timetable-a.component';

describe('TimetableAComponent', () => {
  let component: TimetableAComponent;
  let fixture: ComponentFixture<TimetableAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimetableAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimetableAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
