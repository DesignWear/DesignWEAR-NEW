import { Component, Input } from "@angular/core";
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from "@angular/router";
import SITEMAP, { Sitemap } from "../../sitemenu";
import { MenuIconComponemt } from "../menu-icon/menu-icon.component";

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrl: './top-menu.component.scss',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, MenuIconComponemt],
})
export class TopMenuComponent {
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

    getSitemap(): Sitemap[] {
        return SITEMAP;
    }
}
