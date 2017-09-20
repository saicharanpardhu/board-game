import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreSubimitComponent } from './score-subimit.component';

describe('ScoreSubimitComponent', () => {
  let component: ScoreSubimitComponent;
  let fixture: ComponentFixture<ScoreSubimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreSubimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreSubimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
