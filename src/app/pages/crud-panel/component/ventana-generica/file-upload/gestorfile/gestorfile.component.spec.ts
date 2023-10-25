import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorfileComponent } from './gestorfile.component';

describe('GestorfileComponent', () => {
  let component: GestorfileComponent;
  let fixture: ComponentFixture<GestorfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestorfileComponent]
    });
    fixture = TestBed.createComponent(GestorfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
