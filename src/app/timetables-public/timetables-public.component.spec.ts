import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetablesPublicComponent } from './timetables-public.component';

describe('TimetablesPublicComponent', () => {
  let component: TimetablesPublicComponent;
  let fixture: ComponentFixture<TimetablesPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimetablesPublicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimetablesPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
