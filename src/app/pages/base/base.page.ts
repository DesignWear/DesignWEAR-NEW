import { Component, input, OnInit } from "@angular/core";
import { TopMenuComponent } from "../../layout/top-menu/top-menu.component";
import { RouterLink } from "@angular/router";
import { SliderComponent } from "../../shared/slider/slider.component";

@Component({
    selector: 'app-base-page',
    templateUrl: './base.page.html',
    styleUrl: './base.page.scss',
    imports: [RouterLink, TopMenuComponent, SliderComponent],
    standalone: true,
})
export class BasePage implements OnInit {
    ngOnInit(): void {
        // TODO
    }
}
