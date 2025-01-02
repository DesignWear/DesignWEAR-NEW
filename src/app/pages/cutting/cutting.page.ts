import { Component, input, OnInit } from "@angular/core";
import { TopMenuComponent } from "../../layout/top-menu/top-menu.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-cutting-page',
    templateUrl: './cutting.page.html',
    styleUrl: './cutting.page.scss',
    imports: [RouterLink, TopMenuComponent],
    standalone: true,
})
export class CuttingPage implements OnInit {
    ngOnInit(): void {
        // TODO
    }
}
