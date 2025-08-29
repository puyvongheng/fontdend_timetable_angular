import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementTeacherRegisterComponent } from './management-teacher-register.component';

describe('ManagementTeacherRegisterComponent', () => {
  let component: ManagementTeacherRegisterComponent;
  let fixture: ComponentFixture<ManagementTeacherRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementTeacherRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementTeacherRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
