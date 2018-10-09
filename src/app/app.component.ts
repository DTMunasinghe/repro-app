import { Component } from '@angular/core';
import { StaticInjector } from '@angular/core/src/di/injector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CRM';
  currentUrl: string;
  urlParts: string[];
  currentSite: string;

  constructor(private router: Router) {
    /* TODO - Need to Revisit */
    this.currentUrl = location.pathname;
    this.urlParts = this.currentUrl.split('/', 2);
    this.currentSite = this.urlParts[1];
  }
}
