import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevotionsComponent } from './devotions.component';

describe('DevotionsComponent', () => {
  let component: DevotionsComponent;
  let fixture: ComponentFixture<DevotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
