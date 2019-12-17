import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperjsComponent } from './swiperjs.component';

describe('SwiperjsComponent', () => {
  let component: SwiperjsComponent;
  let fixture: ComponentFixture<SwiperjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwiperjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwiperjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
