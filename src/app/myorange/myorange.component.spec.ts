import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyorangeComponent } from './myorange.component';

describe('MyorangeComponent', () => {
  let component: MyorangeComponent;
  let fixture: ComponentFixture<MyorangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyorangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyorangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
