import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    Pages Component: {{isLoading$.value}}
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
})

export class PagesComponent {
  isLoading$ = new BehaviorSubject<boolean>(true);
  constructor(private router: Router) {
    console.log("pages component");
    this.router.events
        .subscribe((event) => {
        if (event instanceof NavigationStart) {
            console.log("Pages Component Navigation Start", this.router.url);
            this.isLoading$.next(true);    
        }
        else if (event instanceof NavigationEnd) {
            console.log("Pages Component Navigation End", this.router.url);
            this.isLoading$.next(false); 
        }
        });
    }
  menu = MENU_ITEMS;
}
