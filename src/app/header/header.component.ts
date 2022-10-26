import { Component, Input, OnInit } from '@angular/core';

// importaçao para carbon
import { IconService, NavigationItem } from 'carbon-components-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() headerItems: NavigationItem[];
  hasHamburger = false;
  constructor(protected iconService: IconService) {}

  ngOnInit() {
    this.iconService.registerAll([Notification]);
  }
}
