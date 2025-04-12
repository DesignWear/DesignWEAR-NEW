import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SliderComponent } from "../../../shared/slider/slider.component";

@Component({
    selector: 'app-slides-page',
    templateUrl: './slides.page.html',
    styleUrl: './slides.page.scss',
    imports: [SliderComponent, RouterLink],
    standalone: true,
})
export class SlidesPage { }
