import { Component, OnInit } from "@angular/core";
import { ArrowsNavigationComponent } from "../../creation/components/arrows-navigation.component";
import { GamificationService, ModuleId } from "../../../services/gamification.service";
import { PageHeaderComponent } from "../../../shared/page-header/page-header.component";

@Component({
    selector: 'app-modeling-amplitude-2-page',
    templateUrl: './modeling-amplitude-2.page.html',
    styleUrl: './modeling-amplitude-2.page.scss',
    imports: [ArrowsNavigationComponent, PageHeaderComponent],
    standalone: true,
})
export class ModelingAmplitude2Page implements OnInit {
    showModal: boolean = false;

    constructor(
        private readonly gamificationService: GamificationService,
    ) { }

    ngOnInit(): void {
        this.gamificationService.checkPoint({ moduleId: ModuleId.Modelagem, value: 'amplitude-2' });
    }

    handleOpenVideo(): void {
        this.showModal = true;
    }
}
