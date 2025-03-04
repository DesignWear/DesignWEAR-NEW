import { Component } from "@angular/core";
import { ArrowsNavigationComponent } from "../../creation/components/arrows-navigation.component";

@Component({
    selector: 'app-modeling-moldes-1-page',
    templateUrl: './modeling-moldes-1.page.html',
    styleUrl: './modeling-moldes-1.page.scss',
    imports: [ArrowsNavigationComponent],
    standalone: true,
})
export class ModelingMoldes1Page {
    showModal: boolean = false;

    handleOpenVideo(): void {
        this.showModal = true;
    }
}
