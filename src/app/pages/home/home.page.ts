import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import SITEMAP, { Sitemap } from "../../sitemenu";

@Component({
  selector: 'app-splas-page',
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
  standalone: true,
  imports: [RouterLink],
})
export class HomePage {
    getSitemap(): Sitemap[] {
      return SITEMAP;
    }
}