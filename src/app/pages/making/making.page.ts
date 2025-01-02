import { Component, input, OnInit } from "@angular/core";
import { TopMenuComponent } from "../../layout/top-menu/top-menu.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-making-page',
    templateUrl: './making.page.html',
    styleUrl: './making.page.scss',
    imports: [RouterLink, TopMenuComponent],
    standalone: true,
})
export class MakingPage implements OnInit {
    ngOnInit(): void {
        // TODO
    }
}
