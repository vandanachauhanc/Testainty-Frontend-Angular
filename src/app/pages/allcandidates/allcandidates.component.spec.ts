import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcandidatesComponent } from './allcandidates.component';

describe('AllcandidatesComponent', () => {
  let component: AllcandidatesComponent;
  let fixture: ComponentFixture<AllcandidatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcandidatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcandidatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
