import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZdogComponent } from './zdog.component';

describe('ZdogComponent', () => {
  let component: ZdogComponent;
  let fixture: ComponentFixture<ZdogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZdogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZdogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
