import { Component } from "@angular/core";
import { ArrowsNavigationComponent } from "../../creation/components/arrows-navigation.component";

@Component({
    selector: 'app-modeling-acabamento-2-page',
    templateUrl: './modeling-acabamento-2.page.html',
    styleUrl: './modeling-acabamento-2.page.scss',
    imports: [ArrowsNavigationComponent],
    standalone: true,
})
export class ModelingAcabamento2Page {
    showModal: boolean = false;

    handleOpenVideo(): void {
        this.showModal = true;
    }
}