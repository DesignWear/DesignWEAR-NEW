import { Component, OnInit } from "@angular/core";
import { TopMenuComponent } from "../../../layout/top-menu/top-menu.component";

@Component({
    selector: 'app-saia-1-page',
    templateUrl: './saia-1.page.html',
    styleUrl: './saia-1.page.scss',
    standalone: true,
    imports: [TopMenuComponent],
})
export class Saia1Page implements OnInit {
    ngOnInit(): void {
        // TODO
    }
}