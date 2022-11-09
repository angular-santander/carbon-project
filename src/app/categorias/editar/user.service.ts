import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResponseUsers } from '../categoria.model';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  private url = "https://carbon-project.herokuapp.com/categorias" 

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ResponseUsers> {
    return this.http.get<ResponseUsers>(this.url)
  }

}
