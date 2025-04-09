import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-making-page',
    templateUrl: './making.page.html',
    styleUrl: './making.page.scss',
    imports: [RouterLink],
    standalone: true,
})
export class MakingPage { }
