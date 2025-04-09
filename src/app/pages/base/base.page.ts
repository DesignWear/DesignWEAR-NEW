import { Component } from "@angular/core";
import { SliderComponent } from "../../shared/slider/slider.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-base-page',
    templateUrl: './base.page.html',
    styleUrl: './base.page.scss',
    imports: [SliderComponent, RouterLink],
    standalone: true,
})
export class BasePage { }
