import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericTablaComponent } from './generic-tabla.component';

describe('GenericTablaComponent', () => {
  let component: GenericTablaComponent;
  let fixture: ComponentFixture<GenericTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericTablaComponent]
    });
    fixture = TestBed.createComponent(GenericTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
