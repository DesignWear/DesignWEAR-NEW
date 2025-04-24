import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { GamificationService, ModuleId } from "../../../services/gamification.service";
import { PageHeaderComponent } from "../../../shared/page-header/page-header.component";

@Component({
    selector: 'app-frankenstein-page',
    templateUrl: './frankenstein.page.html',
    styleUrls: ['./frankenstein.page.scss'],
    standalone: true,
    imports: [FormsModule, PageHeaderComponent],
})
export class FrankensteinsPage {
    comprimentoId?: string = '0';
    pincaId?: string = '0';
    amplitudeId?: string = '0';
    cintaId?: string = '0';

    get frankenstein(): string {
        if (this.comprimentoId !== '0' && this.pincaId !== '0' && this.amplitudeId !== '0' && this.cintaId !== '0') {
            const combination = `${this.comprimentoId}.${this.pincaId}.${this.amplitudeId}.${this.cintaId}`;
            this.gamificationService.checkPoint({ moduleId: ModuleId.Criacao, value: 'frankensteinDone' });
            this.saveState();
            return `/imgs/frankensteins/${combination}.png`;
        } else {
            return '/imgs/frankensteins/0.0.0.0.svg';
        }
    }

    constructor(
        private readonly gamificationService: GamificationService,
    ) {
        const result = localStorage.getItem('DesignWear:frankensteinState');

        if (result) {
            const state = JSON.parse(result);
            this.comprimentoId = state.comprimentoId;
            this.pincaId = state.pincaId;
            this.amplitudeId = state.amplitudeId;
            this.cintaId = state.cintaId;
        } else {
            localStorage.setItem('DesignWear:frankensteinState', JSON.stringify({
                comprimentoId: '0',
                pincaId: '0',
                amplitudeId: '0',
                cintaId: '0',
            }));
        }	
    }

    saveState(): void {
        localStorage.setItem('DesignWear:frankensteinState', JSON.stringify({
            comprimentoId: this.comprimentoId,
            pincaId: this.pincaId,
            amplitudeId: this.amplitudeId,
            cintaId: this.cintaId,
        }));
    }   
}
