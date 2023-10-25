import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionSedesComponent } from './gestion-sedes.component';

describe('GestionSedesComponent', () => {
  let component: GestionSedesComponent;
  let fixture: ComponentFixture<GestionSedesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionSedesComponent]
    });
    fixture = TestBed.createComponent(GestionSedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
