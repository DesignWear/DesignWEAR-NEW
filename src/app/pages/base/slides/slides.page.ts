import { Component } from "@angular/core";
import { SliderComponent } from "../../../shared/slider/slider.component";
import { PageHeaderComponent } from "../../../shared/page-header/page-header.component";

@Component({
    selector: 'app-slides-page',
    templateUrl: './slides.page.html',
    styleUrl: './slides.page.scss',
    imports: [SliderComponent, PageHeaderComponent],
    standalone: true,
})
export class SlidesPage { }
