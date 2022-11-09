export class Categoria {
  id: number;
  nomeDaCategoria: string;

  constructor(id: number, nomeDaCategoria: string) {
    this.id = id;
    this.nomeDaCategoria = nomeDaCategoria;
  }
}

export interface User {
  id: number;
  nome: string;
}

export interface ResponseUsers {
  data: User[]
}
