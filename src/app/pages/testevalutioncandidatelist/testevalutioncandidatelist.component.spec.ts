import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestevalutioncandidatelistComponent } from './testevalutioncandidatelist.component';

describe('TestevalutioncandidatelistComponent', () => {
  let component: TestevalutioncandidatelistComponent;
  let fixture: ComponentFixture<TestevalutioncandidatelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestevalutioncandidatelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestevalutioncandidatelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
