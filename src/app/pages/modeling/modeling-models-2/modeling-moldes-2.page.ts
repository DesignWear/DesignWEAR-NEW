import { Component } from "@angular/core";
import { ArrowsNavigationComponent } from "../../creation/components/arrows-navigation.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-modeling-moldes-2-page',
    templateUrl: './modeling-moldes-2.page.html',
    styleUrl: './modeling-moldes-2.page.scss',
    imports: [ArrowsNavigationComponent, RouterLink],
    standalone: true,
})
export class ModelingMoldes2Page {
    showModal: boolean = false;

    handleOpenVideo(): void {
        this.showModal = true;
    }
}
