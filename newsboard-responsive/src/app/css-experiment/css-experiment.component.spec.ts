import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssExperimentComponent } from './css-experiment.component';

describe('CssExperimentComponent', () => {
  let component: CssExperimentComponent;
  let fixture: ComponentFixture<CssExperimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssExperimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
