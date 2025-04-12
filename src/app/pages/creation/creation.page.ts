import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-creation-page',
    templateUrl: './creation.page.html',
    styleUrl: './creation.page.scss',
    imports: [RouterOutlet],
    standalone: true,
})
export class CreationPage { }
