import { Component } from "@angular/core";
import { ArrowsNavigationComponent } from "../../creation/components/arrows-navigation.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-modeling-amplitude-1-page',
    templateUrl: './modeling-amplitude-1.page.html',
    styleUrl: './modeling-amplitude-1.page.scss',
    imports: [ArrowsNavigationComponent, RouterLink],
    standalone: true,
})
export class ModelingAmplitude1Page {
    showModal: boolean = false;

    handleOpenVideo(): void {
        this.showModal = true;
    }
}
