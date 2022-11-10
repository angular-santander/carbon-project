import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/categoria.service';
import { Categoria } from '../categoria.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})

export class EditarComponent implements OnInit {

  title = 'Você está vendo todas as categorias';
  description = 'Selecione quais você quer editar';

  categoria: Categoria | undefined;
  categorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCategoria();
  }

  getCategoria(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.categoriaService.getCategoria(id)
      .subscribe(categoria => this.categoria = categoria);
  }

  save(): void {
    if (this.categoria) {
      this.categoriaService.updateCategoria(this.categoria).subscribe(response => {
        console.log("Produto Atualizado!!");
      });

    }
  }
}