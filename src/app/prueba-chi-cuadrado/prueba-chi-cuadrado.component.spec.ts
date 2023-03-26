import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaChiCuadradoComponent } from './prueba-chi-cuadrado.component';

describe('PruebaChiCuadradoComponent', () => {
  let component: PruebaChiCuadradoComponent;
  let fixture: ComponentFixture<PruebaChiCuadradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaChiCuadradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaChiCuadradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
