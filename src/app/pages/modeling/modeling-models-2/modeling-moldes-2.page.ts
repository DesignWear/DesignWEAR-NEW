import { Component } from "@angular/core";
import { ArrowsNavigationComponent } from "../../creation/components/arrows-navigation.component";

@Component({
    selector: 'app-modeling-moldes-2-page',
    templateUrl: './modeling-moldes-2.page.html',
    styleUrl: './modeling-moldes-2.page.scss',
    imports: [ArrowsNavigationComponent],
    standalone: true,
})
export class ModelingMoldes2Page {
    showModal: boolean = false;

    handleOpenVideo(): void {
        this.showModal = true;
    }
}
