import { Component } from "@angular/core";
import { ArrowsNavigationComponent } from "../../creation/components/arrows-navigation.component";

@Component({
    selector: 'app-modeling-acabamento-1-page',
    templateUrl: './modeling-acabamento-1.page.html',
    styleUrl: './modeling-acabamento-1.page.scss',
    imports: [ArrowsNavigationComponent],
    standalone: true,
})
export class ModelingAcabamento1Page {
    showModal: boolean = false;

    handleOpenVideo(): void {
        this.showModal = true;
    }
}