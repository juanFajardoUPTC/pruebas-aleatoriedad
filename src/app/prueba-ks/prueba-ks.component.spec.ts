import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaKSComponent } from './prueba-ks.component';

describe('PruebaKSComponent', () => {
  let component: PruebaKSComponent;
  let fixture: ComponentFixture<PruebaKSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaKSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaKSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
