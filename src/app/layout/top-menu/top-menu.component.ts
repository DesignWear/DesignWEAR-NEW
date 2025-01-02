import { Component, input, OnInit } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import SITEMAP, { Sitemap } from "../../sitemenu";

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrl: './top-menu.component.scss',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
})
export class TopMenuComponent implements OnInit {
    showMenu = input(true);

    ngOnInit(): void {
        // TODO
    }

    getSitemap(): Sitemap[] {
        return SITEMAP;
    }
}
