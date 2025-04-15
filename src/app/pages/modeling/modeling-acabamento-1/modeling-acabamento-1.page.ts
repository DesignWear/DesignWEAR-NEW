import { Component, OnInit } from "@angular/core";
import { ArrowsNavigationComponent } from "../../creation/components/arrows-navigation.component";
import { GamificationService, ModuleId } from "../../../services/gamification.service";
import { PageHeaderComponent } from "../../../shared/page-header/page-header.component";

@Component({
    selector: 'app-modeling-acabamento-1-page',
    templateUrl: './modeling-acabamento-1.page.html',
    styleUrl: './modeling-acabamento-1.page.scss',
    imports: [ArrowsNavigationComponent, PageHeaderComponent],
    standalone: true,
})
export class ModelingAcabamento1Page implements OnInit {
    showModal: boolean = false;

    constructor(
        private readonly gamificationService: GamificationService,
    ) { }

    ngOnInit(): void {
        this.gamificationService.checkPoint({ moduleId: ModuleId.Modelagem, value: 'acabamento-1' });
    }

    handleOpenVideo(): void {
        this.showModal = true;
    }
}