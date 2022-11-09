import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Categoria } from './categorias/categoria.model';
import { HeaderComponent } from './header/header.component';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private categoriasUrl = 'https://carbon-project.herokuapp.com/categorias'; //URL to web api
  //http://localhost:4200/incluir

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  addCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.categoriasUrl, categoria, this.httpOptions).pipe(
      catchError(this.handleError<Categoria>('addCategoria'))
    );
  }

  updateCategoria(categoria: Categoria): Observable<any> {
    return this.http.put(this.categoriasUrl, categoria, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateCategoria'))
    );
  }

  
  log(arg0: string): void {
    throw new Error('Method not implemented.');
  }
  /**
* Handle Http operation that failed.
* Let the app continue.
*
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error('Aconteceu um erro!', error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
