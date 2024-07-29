import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerSideComponent } from './drawer-side.component';

describe('DrawerSideComponent', () => {
  let component: DrawerSideComponent;
  let fixture: ComponentFixture<DrawerSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DrawerSideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrawerSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
