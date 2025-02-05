import { Component } from "@angular/core";
import { ArrowsNavigationComponent } from "../../creation/components/arrows-navigation.component";

@Component({
    selector: 'app-modeling-recorte-page',
    templateUrl: './modeling-recorte.page.html',
    styleUrl: './modeling-recorte.page.scss',
    imports: [ArrowsNavigationComponent],
    standalone: true,
})
export class ModelingRecortePage {
    showModal: boolean = false;

    handleOpenVideo(): void {
        this.showModal = true;
    }
}