import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/categoria.service';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})

export class EditarComponent implements OnInit {


  categoria: Categoria
  user: any;

  constructor(private categoriaService: CategoriaService) { }

  title = 'Você está vendo todas as categorias';
  description = 'Selecione quais você quer editar';

  ngOnInit() {
    return this.categoriaService.getUsers()
      .subscribe(res => this.categoria = res)
  }






}