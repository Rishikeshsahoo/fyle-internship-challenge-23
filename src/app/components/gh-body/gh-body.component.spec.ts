import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhBodyComponent } from './gh-body.component';

describe('GhBodyComponent', () => {
  let component: GhBodyComponent;
  let fixture: ComponentFixture<GhBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GhBodyComponent]
    });
    fixture = TestBed.createComponent(GhBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
