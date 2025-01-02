import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { TopMenuComponent } from "../../layout/top-menu/top-menu.component";
import SITEMAP, { Sitemap } from "../../sitemenu";

@Component({
  selector: 'app-splas-page',
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
  standalone: true,
  imports: [RouterLink, TopMenuComponent],
})
export class HomePage implements OnInit {
    ngOnInit(): void {
        // TODO
    }

    getSitemap(): Sitemap[] {
      return SITEMAP;
    }
}