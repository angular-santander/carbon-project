import { Component, OnInit } from '@angular/core';
import { TableHeaderItem, TableItem, TableModel, InputModule } from 'carbon-components-angular';
import { CategoriaService } from 'src/app/categoria.service';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.scss']
})
export class IncluirComponent implements OnInit {
  categorias: Categoria[] = [];

  
  constructor(private categoriaService: CategoriaService) { }
  
  title = 'Você está no modo cadastro de categorias';
  description = 'Insira o nome da categoria abaixo para realizar o cadastro';



  ngOnInit() {
    
  }
  
  add(nome: string): void {
    nome = nome.trim();
    if(!nome) {return;}
    this.categoriaService.addCategoria({ nome } as unknown as Categoria)
      .subscribe(categoria => {
        this.categorias.push(categoria);
        console.log('teste add categoria:', categoria.id, categoria.nomeDaCategoria);
      })
    }


}