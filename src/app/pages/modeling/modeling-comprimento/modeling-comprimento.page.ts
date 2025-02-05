import { Component } from "@angular/core";
import { ArrowsNavigationComponent } from "../../creation/components/arrows-navigation.component";

@Component({
    selector: 'app-modeling-comprimento-page',
    templateUrl: './modeling-comprimento.page.html',
    styleUrl: './modeling-comprimento.page.scss',
    imports: [ArrowsNavigationComponent],
    standalone: true,
})
export class ModelingComprimentoPage {
    showModal: boolean = false;

    handleOpenVideo(): void {
        this.showModal = true;
    }
}