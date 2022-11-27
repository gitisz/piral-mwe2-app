import { Component, OnInit } from '@angular/core';
import { StyleManagerService } from './services/style-manager.service';

@Component({
  styleUrls: ['./page.component.css'],
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {

  private readonly stylesBasePath = `node_modules/@angular/material/prebuilt-themes`;

  constructor(private readonly styleManager: StyleManagerService) {}

  ngOnInit() {
    this.styleManager.setStyle(`${this.stylesBasePath}/pink-bluegrey.css`);
  }
}
