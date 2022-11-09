import { Component, OnInit } from '@angular/core';
import { ResponseUsers } from '../categoria.model';
import { UserService } from './user.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})

export class EditarComponent implements OnInit {


  responseUsers: ResponseUsers
  user: any;

  constructor(private userService: UserService) { }

  title = 'Você está vendo todas as categorias';
  description = 'Selecione quais você quer editar';

  ngOnInit() {
    return this.userService.getUsers()
      .subscribe(res => this.responseUsers = res)
  }






}