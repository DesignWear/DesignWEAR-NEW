import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-base-page',
    templateUrl: './base.page.html',
    styleUrl: './base.page.scss',
    imports: [RouterOutlet],
    standalone: true,
})
export class BasePage { }
