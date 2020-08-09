import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortUrlListComponent } from './short-url-list.component';

describe('ShortUrlListComponent', () => {
  let component: ShortUrlListComponent;
  let fixture: ComponentFixture<ShortUrlListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortUrlListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortUrlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
