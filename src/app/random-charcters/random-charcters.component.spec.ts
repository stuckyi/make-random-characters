import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCharctersComponent } from './random-charcters.component';

describe('RandomCharctersComponent', () => {
  let component: RandomCharctersComponent;
  let fixture: ComponentFixture<RandomCharctersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomCharctersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCharctersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
