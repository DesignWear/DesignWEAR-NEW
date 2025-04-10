import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-frankenstein-page',
    templateUrl: './frankenstein.page.html',
    styleUrls: ['./frankenstein.page.scss'],
    standalone: true,
    imports: [FormsModule, RouterLink],
})
export class FrankensteinsPage {
    comprimentoId?: string = '0';
    pincaId?: string = '0';
    amplitudeId?: string = '0';
    cintaId?: string = '0';

    get frankenstein(): string {
        if (this.comprimentoId !== '0' && this.pincaId !== '0' && this.amplitudeId !== '0' && this.cintaId !== '0') {
            return `/imgs/frankensteins/${this.comprimentoId}.${this.pincaId}.${this.amplitudeId}.${this.cintaId}.png`;
        } else {
            return '/imgs/frankensteins/0.0.0.0.svg';
        }
    }
}
