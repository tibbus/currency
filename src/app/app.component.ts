import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    public active: string;

    constructor(private router: Router) {}

    ngOnInit() {
        this.router.events.subscribe((route: any) => {
            // Check if the route is redirected
            this.active = route.urlAfterRedirects || route.url;
        });
    }
}
