import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsStudyComponent } from './rxjs-study.component';

describe('RxjsStudyComponent', () => {
  let component: RxjsStudyComponent;
  let fixture: ComponentFixture<RxjsStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
