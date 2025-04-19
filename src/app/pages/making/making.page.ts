import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-making-page',
    templateUrl: './making.page.html',
    styleUrl: './making.page.scss',
    imports: [RouterOutlet],
    standalone: true,
})
export class MakingPage { }

