import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSelecionadoComponent } from './editar-selecionado.component';

describe('EditarSelecionadoComponent', () => {
  let component: EditarSelecionadoComponent;
  let fixture: ComponentFixture<EditarSelecionadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSelecionadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarSelecionadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
