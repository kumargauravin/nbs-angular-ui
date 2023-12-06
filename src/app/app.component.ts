import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: 'app:{{isLoading$.value}}<div><router-outlet></router-outlet></div>',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nbs-ui';

  isLoading$ = new BehaviorSubject<boolean>(true);
  constructor(private router: Router) {
    console.log("App component");
    this.router.events
        .subscribe((event) => {
        if (event instanceof NavigationStart) {
            console.log("App Component NavigationStart", this.router.url);
            this.isLoading$.next(true);    
        }
        else if (event instanceof NavigationEnd) {
            console.log("App Component NavigationEnd", this.router.url);
            this.isLoading$.next(false); 
        }
        });
    }

}
