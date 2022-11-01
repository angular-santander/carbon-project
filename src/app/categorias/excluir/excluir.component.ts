import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ChildActivationStart } from '@angular/router';
import {
  TableModel,
  TableHeaderItem,
  TableItem,
} from 'carbon-components-angular';
import { ExcluirCategoriaService } from './excluir-categoria.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss'],
})
export class ExcluirComponent implements OnInit {
  title = 'Você está vendo todas as categorias';
  description = 'Selecione qual você quer excluir';
  linhaSelecionada: number;
  id;

  tableModel = new TableModel();
  tableData = [
    [new TableItem({ data: '001' }), new TableItem({ data: 'Categoria 1' })],
    [new TableItem({ data: '002' }), new TableItem({ data: 'Categoria 2' })],
    [new TableItem({ data: '003' }), new TableItem({ data: 'Categoria 3' })],
    [new TableItem({ data: '004' }), new TableItem({ data: 'Categoria 4' })],
    [new TableItem({ data: '005' }), new TableItem({ data: 'Categoria 5' })],
    [new TableItem({ data: '006' }), new TableItem({ data: 'Categoria 6' })],
  ];

  constructor(private excluirCategoriaService: ExcluirCategoriaService) {}

  ngOnInit() {
    this.tableModel.data = [];
    this.tableModel.header = [
      new TableHeaderItem({ data: 'Id' }),
      new TableHeaderItem({ data: 'Nome da Categoria' }),
    ];
    this.tableModel.pageLength = 10;
    this.tableModel.currentPage = 1;
    this.tableModel.totalDataLength = this.tableData.length;
    this.selectPage(1);
  }
  selectPage(page) {
    this.tableModel.currentPage = page;
    const fullPage = [];
    for (
      let i = (page - 1) * this.tableModel.pageLength;
      i < page * this.tableModel.pageLength &&
      i < this.tableModel.totalDataLength;
      i++
    ) {
      fullPage.push(this.tableData[0 + i]);
      this.tableModel.data = fullPage;
    }
  }

  onSelected(val) {
    this.linhaSelecionada = val.selectedRowIndex;
  }

  onDelete() {
    this.id = this.tableModel.data[this.linhaSelecionada][0].data;
    if (this.linhaSelecionada != null) {
      this.excluirCategoriaService.deleteCategoria(this.id);
      alert('Categoria excluida');
      //por enquanto isso não vai funcionar porque a requisição http não está levando para lugar nenhum
    } else {
      alert('Nenhuma categoria selecionada!');
    }
  }
}
