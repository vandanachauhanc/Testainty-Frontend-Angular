import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateinterviewComponent } from './candidateinterview.component';

describe('CandidateinterviewComponent', () => {
  let component: CandidateinterviewComponent;
  let fixture: ComponentFixture<CandidateinterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateinterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateinterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
