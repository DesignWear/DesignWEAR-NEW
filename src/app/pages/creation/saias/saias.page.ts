import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-saias-page',
    templateUrl: './saias.page.html',
    styleUrl: './saias.page.scss',
    imports: [RouterLink],
    standalone: true,
})
export class SaiasPage { }
