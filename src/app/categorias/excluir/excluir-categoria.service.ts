import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExcluirCategoriaService {
  status = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  deleteCategoria(id: number) {
    this.http
      .delete('https://carbon-project.herokuapp.com/categorias/' + id)
      .subscribe({
        next: (data) => {
          this.status = 'Excluido com sucesso';
          alert(this.status);
        },
        error: (error) => {
          this.errorMessage = error.message;
          console.error('Aconteceu um erro!', error);
        },
      });
  }
}
