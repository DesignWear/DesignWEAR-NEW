import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-calculator-page',
    templateUrl: './calculator.page.html',
    styleUrl: './calculator.page.scss',
    imports: [RouterLink, FormsModule],
    standalone: true,
})
export class CalculatorPage {
    peito: number = 0;
    cintura: number = 0;
    anca: number = 0;
    folgaAnca: number = 0;
    folgaCintura: number = 0;
    cinturaAnca: number = 0;
    cinturaJoelho: number = 0;
    saiaBase: number = 0;

    larguraRetangulo: number = 0;
    linhaAnca: number = 0;
    cinturaCalculada: number = 0;
    pincaMeio: number = 0;

    constructor() {
        const result = localStorage.getItem('DesignWear:calculatorState');

        if (result) {
            const state = JSON.parse(result);
            this.peito = state.peito;
            this.cintura = state.cintura;
            this.anca = state.anca;
            this.folgaAnca = state.folgaAnca;
            this.folgaCintura = state.folgaCintura;
            this.cinturaAnca = state.cinturaAnca;
            this.cinturaJoelho = state.cinturaJoelho;
            this.saiaBase = state.saiaBase;
            this.larguraRetangulo = state.larguraRetangulo;
            this.linhaAnca = state.linhaAnca;
            this.cinturaCalculada = state.cinturaCalculada;
            this.pincaMeio = state.pincaMeio;
        } else {
            localStorage.setItem('DesignWear:calculatorState', JSON.stringify({
                peito: 0,
                cintura: 0,
                anca: 0,
                folgaAnca: 0,
                folgaCintura: 0,
                cinturaAnca: 0,
                cinturaJoelho: 0,
                saiaBase: 0,
                larguraRetangulo: 0,
                linhaAnca: 0,
                cinturaCalculada: 0,
                pincaMeio: 0,
            }));
        }
    }

    saveState(): void {
        localStorage.setItem('DesignWear:calculatorState', JSON.stringify({
            peito: this.peito,
            cintura: this.cintura,
            anca: this.anca,
            folgaAnca: this.folgaAnca,
            folgaCintura: this.folgaCintura,
            cinturaAnca: this.cinturaAnca,
            cinturaJoelho: this.cinturaJoelho,
            saiaBase: this.saiaBase,
            larguraRetangulo: this.larguraRetangulo,
            linhaAnca: this.linhaAnca,
            cinturaCalculada: this.cinturaCalculada,
            pincaMeio: this.pincaMeio,
        }));
    }

    calculate(): void {
        this.larguraRetangulo = this.anca / 2 + this.folgaAnca / 2;
        this.linhaAnca = this.cinturaAnca;
        this.cinturaCalculada = this.cintura / 4 + 3 + this.folgaCintura / 4;
        this.pincaMeio = this.peito / 10 + 1;
    }

    formatNumber(value: number): string {
        if (value === 0) {
            return '0';
        }
        return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }

    handleChance(id: number, ev: any): void {
        if (id === 1) {
            this.peito = ev.target.value ? Number(ev.target.value) : 0;
        } else if (id === 2) {
            this.cintura = ev.target.value ? Number(ev.target.value) : 0;
        } else if (id === 3) {
            this.anca = ev.target.value ? Number(ev.target.value) : 0;
        } else if (id === 4) {
            this.folgaAnca = ev.target.value ? Number(ev.target.value) : 0;
        } else if (id === 5) {
            this.folgaCintura = ev.target.value ? Number(ev.target.value) : 0;
        } else if (id === 6) {
            this.cinturaAnca = ev.target.value ? Number(ev.target.value) : 0;
        } else if (id === 7) {
            this.cinturaJoelho = ev.target.value ? Number(ev.target.value) : 0;
        } else if (id === 8) {
            this.saiaBase = ev.target.value ? Number(ev.target.value) : 0;
        }

        this.calculate();
        this.saveState();
    }
}
