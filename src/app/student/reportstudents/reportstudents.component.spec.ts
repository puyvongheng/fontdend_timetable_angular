import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportstudentsComponent } from './reportstudents.component';

describe('ReportstudentsComponent', () => {
  let component: ReportstudentsComponent;
  let fixture: ComponentFixture<ReportstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportstudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
