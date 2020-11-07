import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPagesLayoutComponent } from './admin-pages-layout.component';

describe('AdminPagesLayoutComponent', () => {
  let component: AdminPagesLayoutComponent;
  let fixture: ComponentFixture<AdminPagesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPagesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPagesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
