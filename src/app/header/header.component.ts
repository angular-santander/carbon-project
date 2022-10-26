import { Component, OnInit } from '@angular/core';

// importaçao para carbon
import { IconService } from "carbon-components-angular";
import { IconModule } from "carbon-components-angular";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(protected iconService: IconService) {}

  ngOnInit() {
    this.iconService.registerAll([Notification]);
  }

}
