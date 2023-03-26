import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaPokerComponent } from './prueba-poker.component';

describe('PruebaPokerComponent', () => {
  let component: PruebaPokerComponent;
  let fixture: ComponentFixture<PruebaPokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaPokerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaPokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
