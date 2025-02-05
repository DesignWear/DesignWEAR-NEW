import { Component } from "@angular/core";
import { ArrowsNavigationComponent } from "../../creation/components/arrows-navigation.component";

@Component({
    selector: 'app-modeling-amplitude-page',
    templateUrl: './modeling-amplitude.page.html',
    styleUrl: './modeling-amplitude.page.scss',
    imports: [ArrowsNavigationComponent],
    standalone: true,
})
export class ModelingAmplitudePage {
    showModal: boolean = false;

    handleOpenVideo(): void {
        this.showModal = true;
    }
}
