import { Component, OnInit } from "@angular/core";
import { TopMenuComponent } from "../../../layout/top-menu/top-menu.component";

@Component({
    selector: 'app-saias-page',
    templateUrl: './saias.page.html',
    styleUrl: './saias.page.scss',
    standalone: true,
    imports: [TopMenuComponent],
})
export class SaiasPage implements OnInit {
    ngOnInit(): void {
        // TODO
    }
}
