import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestevaluationComponent } from './testevaluation.component';

describe('TestevaluationComponent', () => {
  let component: TestevaluationComponent;
  let fixture: ComponentFixture<TestevaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestevaluationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
