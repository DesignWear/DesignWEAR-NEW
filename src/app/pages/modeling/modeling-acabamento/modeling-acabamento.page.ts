import { Component } from "@angular/core";
import { ArrowsNavigationComponent } from "../../creation/components/arrows-navigation.component";

@Component({
    selector: 'app-modeling-acabamento-page',
    templateUrl: './modeling-acabamento.page.html',
    styleUrl: './modeling-acabamento.page.scss',
    imports: [ArrowsNavigationComponent],
    standalone: true,
})
export class ModelingAcabamentoPage {
    showModal: boolean = false;

    handleOpenVideo(): void {
        this.showModal = true;
    }
}