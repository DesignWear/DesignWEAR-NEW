import { Component } from "@angular/core";
import { SliderComponent } from "../../shared/slider/slider.component";

@Component({
    selector: 'app-base-page',
    templateUrl: './base.page.html',
    styleUrl: './base.page.scss',
    imports: [SliderComponent],
    standalone: true,
})
export class BasePage { }
