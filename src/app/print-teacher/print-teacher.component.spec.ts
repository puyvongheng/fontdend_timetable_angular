import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTeacherComponent } from './print-teacher.component';

describe('PrintTeacherComponent', () => {
  let component: PrintTeacherComponent;
  let fixture: ComponentFixture<PrintTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrintTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
