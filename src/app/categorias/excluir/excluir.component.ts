import { Component, OnInit } from '@angular/core';
import {
  TableModel,
  TableHeaderItem,
  TableItem,
} from 'carbon-components-angular';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.scss'],
})
export class ExcluirComponent implements OnInit {
  title = 'Você está vendo todas as categorias';
  description = 'Selecione quais você quer excluir';

  tableModel = new TableModel();
  tableData = [
    [new TableItem({ data: '001' }), new TableItem({ data: 'Categoria 1' })],
    [new TableItem({ data: '002' }), new TableItem({ data: 'Categoria 2' })],
    [new TableItem({ data: '003' }), new TableItem({ data: 'Categoria 3' })],
    [new TableItem({ data: '004' }), new TableItem({ data: 'Categoria 4' })],
    [new TableItem({ data: '005' }), new TableItem({ data: 'Categoria 5' })],
    [new TableItem({ data: '006' }), new TableItem({ data: 'Categoria 6' })],
  ];

  constructor() {}

  ngOnInit() {
    this.tableModel.data = [];
    this.tableModel.header = [
      new TableHeaderItem({ data: 'Id' }),
      new TableHeaderItem({ data: 'Nome da Categoria' }),
    ];
    this.tableModel.pageLength = 2;
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
}
