import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

type InputField = {
    id: number;
    name: string;
    tam10: string;
    tam12: string;
    tam14: string;
}

@Component({
    selector: 'app-calculator-page',
    templateUrl: './calculator.page.html',
    styleUrl: './calculator.page.scss',
    imports: [RouterLink],
    standalone: true,
})
export class CalculatorPage {
    fields: InputField[] = [
        {
            id: 1,
            name: 'Peito',
            tam10: '84cm',
            tam12: '88cm',
            tam14: '92cm',
        },
        {
            id: 2,
            name: 'Cintura',
            tam10: '68cm',
            tam12: '72cm',
            tam14: '76cm',
        },
        {
            id: 3,
            name: 'Anca',
            tam10: '92cm',
            tam12: '96cm',
            tam14: '100cm',
        },
        {
            id: 4,
            name: 'Folga para Anca',
            tam10: '2 a 4cm',
            tam12: '2 a 4cm',
            tam14: '2 a 4cm',
        },
        {
            id: 5,
            name: 'Folga para Cintura',
            tam10: '1cm',
            tam12: '1cm',
            tam14: '1cm',
        },
        {
            id: 6,
            name: 'Cintura até Anca',
            tam10: '20,3cm',
            tam12: '20,6cm',
            tam14: '20,9cm',
        },
        {
            id: 7,
            name: 'Cintura até Joelho',
            tam10: '58cm',
            tam12: '58,5cm',
            tam14: '59cm',
        },
        {
            id: 8,
            name: 'Comprimento da Saia Base',
            tam10: '45cm',
            tam12: '46cm',
            tam14: '47cm',
        }
    ];

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
    }
}
