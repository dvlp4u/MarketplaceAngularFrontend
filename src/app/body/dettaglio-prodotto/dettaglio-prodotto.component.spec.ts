import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioProdottoComponent } from './dettaglio-prodotto.component';

describe('DettaglioProdottoComponent', () => {
  let component: DettaglioProdottoComponent;
  let fixture: ComponentFixture<DettaglioProdottoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioProdottoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
