import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestioncreationComponent } from './questioncreation.component';

describe('QuestioncreationComponent', () => {
  let component: QuestioncreationComponent;
  let fixture: ComponentFixture<QuestioncreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestioncreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestioncreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
