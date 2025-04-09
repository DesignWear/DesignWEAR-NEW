import { Component } from "@angular/core";
import { ArrowsNavigationComponent } from "../../creation/components/arrows-navigation.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-modeling-comprimento-page',
    templateUrl: './modeling-comprimento.page.html',
    styleUrl: './modeling-comprimento.page.scss',
    imports: [ArrowsNavigationComponent, RouterLink],
    standalone: true,
})
export class ModelingComprimentoPage {
    showModal: boolean = false;

    handleOpenVideo(): void {
        this.showModal = true;
    }
}