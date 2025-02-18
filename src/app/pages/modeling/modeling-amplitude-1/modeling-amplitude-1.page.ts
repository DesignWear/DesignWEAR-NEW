import { Component } from "@angular/core";
import { ArrowsNavigationComponent } from "../../creation/components/arrows-navigation.component";

@Component({
    selector: 'app-modeling-amplitude-1-page',
    templateUrl: './modeling-amplitude-1.page.html',
    styleUrl: './modeling-amplitude-1.page.scss',
    imports: [ArrowsNavigationComponent],
    standalone: true,
})
export class ModelingAmplitude1Page {
    showModal: boolean = false;

    handleOpenVideo(): void {
        this.showModal = true;
    }
}
