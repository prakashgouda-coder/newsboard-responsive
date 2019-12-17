import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomediaqueryComponent } from './nomediaquery.component';

describe('NomediaqueryComponent', () => {
  let component: NomediaqueryComponent;
  let fixture: ComponentFixture<NomediaqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomediaqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomediaqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
