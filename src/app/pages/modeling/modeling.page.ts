import { Component, input, OnInit } from "@angular/core";
import { TopMenuComponent } from "../../layout/top-menu/top-menu.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-modeling-page',
    templateUrl: './modeling.page.html',
    styleUrl: './modeling.page.scss',
    imports: [RouterLink, TopMenuComponent],
    standalone: true,
})
export class ModelingPage implements OnInit {
    ngOnInit(): void {
        // TODO
    }
}
