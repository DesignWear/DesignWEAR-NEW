import { Injectable } from "@angular/core";
import Observable from "../Observable";

export enum ModuleId {
    Criacao = 1,
    Base = 2,
    Modelagem = 3,
    Corte = 4,
    Confecao = 5,
}

export type CheckPoint = {
    moduleId: ModuleId;
    value: any;
}

const MODELING_SLIDES: any[] = [
    { name: 'comprimento', ckecked: false },
    { name: 'recorte', ckecked: false },
    { name: 'amplitude-1', ckecked: false },
    { name: 'amplitude-2', ckecked: false },
    { name: 'acabamento-1', ckecked: false },
    { name: 'acabamento-2', ckecked: false },
    { name: 'moldes-1', ckecked: false },
    { name: 'moldes-2', ckecked: false },
];

@Injectable({
    providedIn: 'root'
})
export class GamificationService {
    public readonly completionEvent = new Observable<string>();
    public readonly checkPointEvent = new Observable<void>();

    private moduleOneCompleteMessage = 'Parabéns por iniciar esta jornada de aprendizagem! Já tens o modelo definido, continua para o Módulo seguinte.';
    private moduleTwoCompleteMessage = 'Estamos um pouco mais perto de atingir o objetivo! Com a Saia Base pronta, continua para o Módulo III e desenvolve os moldes da tua Saia Evasé.';
    private moduleThreeCompleteMessage = 'Parabéns por finalizares os teus moldes! Vamos iniciar juntos a etapa da confeção. O Módulo seguinte guiará o corte do tecido. Bom trabalho!';
    private moduleFourCompleteMessage = 'Muito bom! As partes estão prontas para a confeção. Estamos quase a acabar este desafio!';
    private moduleFiveCompleteMessage = 'Parabéns!! Já tens a tua Saia Evasé pronta! Espero que esses conhecimentos acrescentem à tua formação como Designer de Moda.';

    public readonly TOTAL_CREATRION_SLIDES = 16;
    private countCreationSlides: number = 0;
    private isFrankensteinDone: boolean = false;
    private moduleOne: boolean = false;

    public readonly TOTAL_BASE_SLIDES = 7;
    private countBaseSlides: number = 0;
    private moduleTwo: boolean = false;

    public readonly TOTAL_MODELING_SLIDES = 8;
    private countModelingSlides = MODELING_SLIDES;
    private moduleThree: boolean = false;

    public readonly TOTAL_Cutting_VIDEOS = 7;
    private countCuttingVideos: number = 0;
    private moduleFour: boolean = false;

    private isMakingDone: boolean = false;
    private moduleFive: boolean = false;

    constructor() {
        const result = localStorage.getItem('DesignWear:gamification');
        if (result) {
            const data = JSON.parse(result);
            this.countCreationSlides = data.countCreationSlides;
            this.isFrankensteinDone = data.isFrankensteinDone;
            this.moduleOne = data.moduleOne;

            this.countBaseSlides = data.countBaseSlides;
            this.moduleTwo = data.moduleTwo;

            this.countModelingSlides = data.countModelingSlides;
            this.moduleThree = data.moduleThree;

            this.countCuttingVideos = data.countCuttingVideos;
            this.moduleFour = data.moduleFour;

            this.isMakingDone = data.isMakingDone;
            this.moduleFive = data.moduleFive;
        } else {
            this.countCreationSlides = 0;
            this.isFrankensteinDone = false;
            this.moduleOne = false;

            this.countBaseSlides = 0;
            this.moduleTwo = false;
            
            this.countModelingSlides = MODELING_SLIDES;
            this.moduleThree = false;
            
            this.countCuttingVideos = 0;
            this.moduleFour = false;
            
            this.isMakingDone = false;
            this.moduleFive = false;

            localStorage.setItem('DesignWear:gamification', JSON.stringify({
                countCreationSlides: this.countCreationSlides,
                isFrankensteinDone: this.isFrankensteinDone,
                moduleOne: this.moduleOne,

                countBaseSlides: this.countBaseSlides,
                moduleTwo: this.moduleTwo,

                countModelingSlides: this.countModelingSlides,
                moduleThree: this.moduleThree,

                countCuttingVideos: this.countCuttingVideos,
                moduleFour: this.moduleFour,

                isMakingDone: this.isMakingDone,
                moduleFive: this.moduleFive,
            }));
        }	
    }

    setValue(name: string, value: any): void {
        const result = localStorage.getItem('DesignWear:gamification');
        const data = JSON.parse(result!);
        data[name] = value;
        localStorage.setItem('DesignWear:gamification', JSON.stringify(data));
    }

    checkPoint(data: CheckPoint): void {
        if (data.moduleId === ModuleId.Criacao) {
            this.moduleOneAccountSlide(data.value);
        } else if (data.moduleId === ModuleId.Base) {
            this.moduleTwoAccountSlide(data.value);
        } else if (data.moduleId === ModuleId.Modelagem) {
            this.moduleThreeAccountSlide(data.value);
        } else if (data.moduleId === ModuleId.Corte) {
            this.moduleFourAccountVideos(data.value);
        } else if (data.moduleId === ModuleId.Confecao) {
            this.moduleFiveAccountSlide();
        }
    }

    checkpointAudio(): void {
        const audio = new Audio('sounds/chockpoint.mp3');
        audio.volume = 0.1;
        audio.play();
    }

    moduleOneAccountSlide(value: number | string): void {
        if (typeof value === 'string' && value === 'frankensteinDone' && this.isFrankensteinDone === false) {
            this.isFrankensteinDone = true;
            // console.log('Frankenstein done');
            this.setValue('isFrankensteinDone', this.isFrankensteinDone);

            if (this.countCreationSlides === this.TOTAL_CREATRION_SLIDES && this.isFrankensteinDone) {
                this.setValue('moduleOne', true);
                this.completionEvent.notify(this.moduleOneCompleteMessage);
                this.checkPointEvent.notify();
                this.checkpointAudio();
            }
        } 
        
        if (typeof value === 'number' && value + 1 > this.countCreationSlides) {
            this.countCreationSlides++;
            // console.log('Criacao', this.countCreationSlides);
            this.setValue('countCreationSlides', this.countCreationSlides);

            if (this.countCreationSlides === this.TOTAL_CREATRION_SLIDES && this.isFrankensteinDone) {
                this.setValue('moduleOne', true);
                this.completionEvent.notify(this.moduleOneCompleteMessage);
                this.checkPointEvent.notify();
                this.checkpointAudio();
            }
        }
        
    }

    moduleTwoAccountSlide(currentIndex: number): void {
        if (currentIndex + 1 > this.countBaseSlides) {
            this.countBaseSlides++;
            // console.log('Base', this.countBaseSlides);
            this.setValue('countBaseSlides', this.countBaseSlides);

            if (this.countBaseSlides === this.TOTAL_BASE_SLIDES) {
                this.setValue('moduleTwo', true);
                this.completionEvent.notify(this.moduleTwoCompleteMessage);
                this.checkPointEvent.notify();
                this.checkpointAudio();
            }
        }
    }

    moduleThreeAccountSlide(slideName: string): void {
        const slide = this.countModelingSlides.find(slide => slide.name === slideName && !slide.ckecked);
        if (slide) {
            slide.ckecked = true;
            // console.log('Modelagem', this.countModelingSlides.filter(slide => slide.ckecked).length);
            this.setValue('countModelingSlides', this.countModelingSlides);

            if (this.countModelingSlides.filter(slide => slide.ckecked).length === this.TOTAL_MODELING_SLIDES) {
                this.setValue('moduleThree', true);
                this.completionEvent.notify(this.moduleThreeCompleteMessage);
                this.checkPointEvent.notify();
                this.checkpointAudio();
            }
        }
    }

    moduleFourAccountVideos(currentIndex: number): void {
        if (currentIndex + 1 > this.countCuttingVideos) {
            this.countCuttingVideos++;
            // console.log('Corte', this.countCuttingVideos);
            this.setValue('countCuttingVideos', this.countCuttingVideos);

            if (this.countCuttingVideos === this.TOTAL_Cutting_VIDEOS) {
                this.setValue('moduleFour', true);
                this.completionEvent.notify(this.moduleFourCompleteMessage);
                this.checkPointEvent.notify();
                this.checkpointAudio();
            }
        }
    }

    moduleFiveAccountSlide(): void {
        if (!this.isMakingDone) {
            this.isMakingDone = true;
            // console.log('Making Done');
            this.setValue('isMakingDone', this.isMakingDone);
            this.setValue('moduleFive', true);
            this.completionEvent.notify(this.moduleFiveCompleteMessage);
            this.checkPointEvent.notify();
            this.checkpointAudio();
        }
    }
}
