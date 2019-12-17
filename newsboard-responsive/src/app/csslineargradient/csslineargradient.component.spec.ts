import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsslineargradientComponent } from './csslineargradient.component';

describe('CsslineargradientComponent', () => {
  let component: CsslineargradientComponent;
  let fixture: ComponentFixture<CsslineargradientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsslineargradientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsslineargradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
