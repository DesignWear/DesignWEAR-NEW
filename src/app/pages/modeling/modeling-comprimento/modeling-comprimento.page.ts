import { Component, OnInit } from "@angular/core";
import { ArrowsNavigationComponent } from "../../creation/components/arrows-navigation.component";
import { GamificationService, ModuleId } from "../../../services/gamification.service";
import { PageHeaderComponent } from "../../../shared/page-header/page-header.component";

@Component({
    selector: 'app-modeling-comprimento-page',
    templateUrl: './modeling-comprimento.page.html',
    styleUrl: './modeling-comprimento.page.scss',
    imports: [ArrowsNavigationComponent, PageHeaderComponent],
    standalone: true,
})
export class ModelingComprimentoPage implements OnInit {
    showModal: boolean = false;

    constructor(
        private readonly gamificationService: GamificationService,
    ) {}

    ngOnInit(): void {
        this.gamificationService.checkPoint({ moduleId: ModuleId.Modelagem, value: 'comprimento' });
    }

    handleOpenVideo(): void {
        this.showModal = true;
    }
}