import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreTypesComponent } from './score-types.component';

describe('ScoreTypesComponent', () => {
  let component: ScoreTypesComponent;
  let fixture: ComponentFixture<ScoreTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreTypesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
