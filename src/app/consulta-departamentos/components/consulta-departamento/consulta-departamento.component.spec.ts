import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDepartamentoComponent } from './consulta-departamento.component';

describe('ConsultaDepartamentoComponent', () => {
  let component: ConsultaDepartamentoComponent;
  let fixture: ComponentFixture<ConsultaDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultaDepartamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
