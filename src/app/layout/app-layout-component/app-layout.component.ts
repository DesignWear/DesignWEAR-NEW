import { Component } from "@angular/core";
import { NavigationEnd, Router, RouterLink, RouterOutlet } from "@angular/router";
import { TopMenuComponent } from "../top-menu/top-menu.component";

@Component({
    selector: 'app-layout-component',
    imports: [RouterOutlet, RouterLink, TopMenuComponent],
    template: `
    <app-top-menu></app-top-menu>
    <router-outlet />
    @if (showBtnHome) {
        <div class="home-btn">
            <a routerLink="/app/home">
                <img src="/imgs/home_icon.png">
            </a>
        </div>
    }
  `,
    styles: ``,
    standalone: true,
})
export class AppLayoutComponent {
    showBtnHome: boolean = true;

    constructor(
        private readonly router: Router,
    ) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (event.urlAfterRedirects !== '/app/home') {
                    this.showBtnHome = true;
                } else {
                    this.showBtnHome = false;
                }
            }
        });
    }

    ngOnInit(): void {
        // TODO
    }
}
