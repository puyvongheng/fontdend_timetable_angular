import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TblstudentsComponent } from './tblstudents.component';

describe('TblstudentsComponent', () => {
  let component: TblstudentsComponent;
  let fixture: ComponentFixture<TblstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TblstudentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TblstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
