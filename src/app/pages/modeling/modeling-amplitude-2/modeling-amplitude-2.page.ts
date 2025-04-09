import { Component } from "@angular/core";
import { ArrowsNavigationComponent } from "../../creation/components/arrows-navigation.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-modeling-amplitude-2-page',
    templateUrl: './modeling-amplitude-2.page.html',
    styleUrl: './modeling-amplitude-2.page.scss',
    imports: [ArrowsNavigationComponent, RouterLink],
    standalone: true,
})
export class ModelingAmplitude2Page {
    showModal: boolean = false;

    handleOpenVideo(): void {
        this.showModal = true;
    }
}
