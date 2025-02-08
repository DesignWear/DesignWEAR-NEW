import { Component } from "@angular/core";
import { ArrowsNavigationComponent } from "../../creation/components/arrows-navigation.component";

@Component({
    selector: 'app-modeling-moldes-page',
    templateUrl: './modeling-moldes.page.html',
    styleUrl: './modeling-moldes.page.scss',
    imports: [ArrowsNavigationComponent],
    standalone: true,
})
export class ModelingMoldesPage {
    showModal: boolean = false;

    handleOpenVideo(): void {
        this.showModal = true;
    }
}
