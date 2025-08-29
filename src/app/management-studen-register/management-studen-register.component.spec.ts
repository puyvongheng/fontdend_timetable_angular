import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementStudenRegisterComponent } from './management-studen-register.component';

describe('ManagementStudenRegisterComponent', () => {
  let component: ManagementStudenRegisterComponent;
  let fixture: ComponentFixture<ManagementStudenRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementStudenRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementStudenRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
