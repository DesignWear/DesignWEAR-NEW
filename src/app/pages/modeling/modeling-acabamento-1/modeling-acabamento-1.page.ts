import { Component } from "@angular/core";
import { ArrowsNavigationComponent } from "../../creation/components/arrows-navigation.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-modeling-acabamento-1-page',
    templateUrl: './modeling-acabamento-1.page.html',
    styleUrl: './modeling-acabamento-1.page.scss',
    imports: [ArrowsNavigationComponent, RouterLink],
    standalone: true,
})
export class ModelingAcabamento1Page {
    showModal: boolean = false;

    handleOpenVideo(): void {
        this.showModal = true;
    }
}