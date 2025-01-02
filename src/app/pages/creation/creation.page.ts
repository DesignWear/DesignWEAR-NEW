import { Component, OnInit } from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { TopMenuComponent } from "../../layout/top-menu/top-menu.component";

@Component({
    selector: 'app-creation-page',
    templateUrl: './creation.page.html',
    styleUrl: './creation.page.scss',
    imports: [RouterOutlet, RouterLink, TopMenuComponent],
    standalone: true,
})
export class CreationPage implements OnInit {
    ngOnInit(): void {
        // TODO
    }
}