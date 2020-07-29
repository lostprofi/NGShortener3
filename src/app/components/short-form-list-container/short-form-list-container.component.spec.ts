import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortFormListContainerComponent } from './short-form-list-container.component';

describe('ShortFormListContainerComponent', () => {
  let component: ShortFormListContainerComponent;
  let fixture: ComponentFixture<ShortFormListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortFormListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortFormListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
