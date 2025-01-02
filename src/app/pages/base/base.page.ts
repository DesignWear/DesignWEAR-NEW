import { Component, input, OnInit } from "@angular/core";
import { TopMenuComponent } from "../../layout/top-menu/top-menu.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-base-page',
    templateUrl: './base.page.html',
    styleUrl: './base.page.scss',
    imports: [RouterLink, TopMenuComponent],
    standalone: true,
})
export class BasePage implements OnInit {
    ngOnInit(): void {
        // TODO
    }
}
