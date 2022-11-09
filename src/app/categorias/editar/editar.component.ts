import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/categoria.service';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})

export class EditarComponent implements OnInit {

 nomeDaCategoria: any /* Declarei ela aqui mas nao sei se era mesmo preciso, talves seja isso */

  categoria: Categoria


  constructor(private categoriaService: CategoriaService) { }

  title = 'Você está vendo todas as categorias';
  description = 'Selecione quais você quer editar';

  ngOnInit() {

  }

  save(): void {
    if (this.categoria) {
      this.categoriaService.updateCategoria(this.categoria)
      .subscribe(() => this.goBack());

    }
  }
  goBack(): void {
    throw new Error('Method not implemented.');
  }




}