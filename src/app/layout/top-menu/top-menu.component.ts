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

    toques: number = 0;
    ultimoToque: number = 0;
    intervaloMaximo = 400; // tempo máximo entre toques em ms
    timeoutReset: any;

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

    onTouch() {
        const agora = new Date().getTime();

        if (agora - this.ultimoToque > this.intervaloMaximo) {
            this.toques = 1; // reinicia se demorou demais
        } else {
            this.toques++;
        }

        this.ultimoToque = agora;

        if (this.toques === 5) {
            this.onFiveTaps();
            this.toques = 0;
        }

        // reset automático após tempo de inatividade
        clearTimeout(this.timeoutReset);
        this.timeoutReset = setTimeout(() => {
            this.toques = 0;
        }, this.intervaloMaximo);
    }

    onFiveTaps() {
        if (confirm('Apagar localStorage?') == true) {
            localStorage.clear();
            location.reload();
        }
    }
}
