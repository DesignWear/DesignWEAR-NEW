import { Component, input, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrl: './top-menu.component.scss',
    standalone: true,
    imports: [RouterLink],
})
export class TopMenuComponent implements OnInit {
    showMenu = input(true);

    ngOnInit(): void {
        // TODO
    }
}