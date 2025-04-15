import { Component, OnInit } from "@angular/core";
import { ArrowsNavigationComponent } from "../../creation/components/arrows-navigation.component";
import { GamificationService, ModuleId } from "../../../services/gamification.service";
import { PageHeaderComponent } from "../../../shared/page-header/page-header.component";

@Component({
    selector: 'app-modeling-moldes-1-page',
    templateUrl: './modeling-moldes-1.page.html',
    styleUrl: './modeling-moldes-1.page.scss',
    imports: [ArrowsNavigationComponent, PageHeaderComponent],
    standalone: true,
})
export class ModelingMoldes1Page implements OnInit {
    showModal: boolean = false;

    constructor(
        private readonly gamificationService: GamificationService,
    ) { }

    ngOnInit(): void {
        this.gamificationService.checkPoint({ moduleId: ModuleId.Modelagem, value: 'moldes-1' });
    }

    handleOpenVideo(): void {
        this.showModal = true;
    }
}
