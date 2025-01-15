import { Component, Input, input, OnInit } from "@angular/core";
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from "@angular/router";
import SITEMAP, { Sitemap } from "../../sitemenu";

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrl: './top-menu.component.scss',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
})
export class TopMenuComponent implements OnInit {
    @Input() showMenu: boolean = true;

    constructor(
        private readonly router: Router,
    ) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (event.urlAfterRedirects !== '/app/home') {
                    this.showMenu = true;
                } else {
                    this.showMenu = false;
                }
            } 
        });
    }

    ngOnInit(): void {
        // TODO
    }

    getSitemap(): Sitemap[] {
        return SITEMAP;
    }
}
