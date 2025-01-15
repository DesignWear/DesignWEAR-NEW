import { Component } from "@angular/core";

export enum ActionType {
    PlayAudio = 1,
    PlayVideo = 2,
    DownloadDoc = 3,
    Display3dModel = 4,
    DisplayAugmentedReality = 5,
}

export type Slide = {
    slideUrl: string;
    text: string;
    audioUrl?: string | undefined;
    videoUrl?: string | undefined;
    pdfUrl?: string | undefined;
}

@Component({
    selector: 'app-slider-component',
    templateUrl: './slider.component.html',
    styleUrl: './slider.component.scss',
    imports: [],
    standalone: true,
})
export class SliderComponent {
    _currentSlideIndex: number = 0;
    
    get currentSlide(): Slide {
        return this.slides.at(this._currentSlideIndex)!;
    }

    slides: Slide[] = [
        {
            slideUrl: '/imgs/slides/1/passo1.svg',
            text: 'A-B: Comprimento da saia = 50cm',
            audioUrl: '/imgs/slides/1/passo1.ogg',
            videoUrl: '/imgs/slides/1/video1.mp4',
            pdfUrl: '/imgs/slides/base.pdf',
        },
        {
            slideUrl: '/imgs/slides/2/passo2.svg',
            text: 'A-C: Altura da anca = 20cm',
            audioUrl: '/imgs/slides/2/passo2.ogg',
            videoUrl: '/imgs/slides/2/video2.mp4',
            pdfUrl: '/imgs/slides/base.pdf',
        },
        {
            slideUrl: '/imgs/slides/3/passo3.svg',
            text: 'C-D: Largura da anca 90◦ = 46,5cm',
            audioUrl: '/imgs/slides/3/passo3.ogg',
            videoUrl: '/imgs/slides/3/video3.mp4',
            pdfUrl: '/imgs/slides/base.pdf',
        },
        {
            slideUrl: '/imgs/slides/4/passo4.svg',
            text: 'D-E: Lateral da saia = 21,95 cm',
            audioUrl: '/imgs/slides/4/passo4.ogg',
            videoUrl: '/imgs/slides/4/video4.mp4',
            pdfUrl: '/imgs/slides/base.pdf',
        },
        {
            slideUrl: '/imgs/slides/5/passo5.svg',
            text: 'Fechar retângulo e traçar lateral 90◦ Pontos I, G, F e H',
            audioUrl: '/imgs/slides/5/passo5.ogg',
            videoUrl: '/imgs/slides/5/video5.mp4',
            pdfUrl: '/imgs/slides/base.pdf',
        },
        {
            slideUrl: '/imgs/slides/6/passo6.svg',
            text: 'A-J: Pinça frente = 5.8cm J-K: Abertura pinça = 5cm',
            audioUrl: '/imgs/slides/6/passo6.ogg',
            videoUrl: '/imgs/slides/6/video6.mp4',
            pdfUrl: '/imgs/slides/base.pdf',
        },
        {
            slideUrl: '/imgs/slides/7/passo7.svg',
            text: 'Marcar meio entre J-K e descer linha até anca 90◦ Ponto K1',
            audioUrl: '/imgs/slides/7/passo7.ogg',
            videoUrl: '/imgs/slides/7/video7.mp4',
            pdfUrl: '/imgs/slides/base.pdf',
        },
        {
            slideUrl: '/imgs/slides/8/passo8.svg',
            text: 'A-L: Cintura frente = 23cm',
            audioUrl: '/imgs/slides/8/passo8.ogg',
            videoUrl: '/imgs/slides/8/video8.mp4',
            pdfUrl: '/imgs/slides/base.pdf',
        },
        {
            slideUrl: '/imgs/slides/9/passo9.svg',
            text: 'H-M: Pinça costas = 5,8cm M-N: Abertura pinça = 5cm',
            audioUrl: '/imgs/slides/9/passo9.ogg',
            videoUrl: '/imgs/slides/9/video9.mp4',
            pdfUrl: '/imgs/slides/base.pdf',
        },
        {
            slideUrl: '/imgs/slides/10/passo10.svg',
            text: 'No meio entre M-N descer linha até anca 90◦ Ponto N1',
            audioUrl: '/imgs/slides/10/passo10.ogg',
            videoUrl: '/imgs/slides/10/video10.mp4',
            pdfUrl: '/imgs/slides/base.pdf',
        },
        {
            slideUrl: '/imgs/slides/11/passo11.svg',
            text: 'H-O: Cintura costas = 20.4cm',
            audioUrl: '/imgs/slides/11/passo11.ogg',
            videoUrl: '/imgs/slides/11/video11.mp4',
            pdfUrl: '/imgs/slides/base.pdf',
        },
        {
            slideUrl: '/imgs/slides/12/passo12.svg',
            text: 'L- L1 e O- O1 = 1,3cm',
            audioUrl: '/imgs/slides/12/passo12.ogg',
            videoUrl: '/imgs/slides/12/video12.mp4',
            pdfUrl: '/imgs/slides/base.pdf',
        },
        {
            slideUrl: '/imgs/slides/13/passo13.svg',
            text: 'E-P = 4cm',
            audioUrl: '/imgs/slides/13/passo13.ogg',
            videoUrl: '/imgs/slides/13/video13.mp4',
            pdfUrl: '/imgs/slides/base.pdf',
        },
        {
            slideUrl: '/imgs/slides/14/passo14.svg',
            text: 'P-L1 e P-O1: Traçar curva da anca',
            audioUrl: '/imgs/slides/14/passo14.ogg',
            videoUrl: '/imgs/slides/14/video14mp4',
            pdfUrl: '/imgs/slides/base.pdf',
        },
        {
            slideUrl: '/imgs/slides/15/passo15.svg',
            text: 'H-H1: Baixar 0,7cm e traçar linha de apoio 90◦',
            audioUrl: '/imgs/slides/15/passo15.ogg',
            videoUrl: '/imgs/slides/15/video15.mp4',
            pdfUrl: '/imgs/slides/base.pdf',
        },
        {
            slideUrl: '/imgs/slides/16/passo16.svg',
            text: 'Subir 5cm dos pontos N1 e K1',
            audioUrl: '/imgs/slides/16/passo16.ogg',
            videoUrl: '/imgs/slides/16/video16.mp4',
            pdfUrl: '/imgs/slides/base.pdf',
        },
        {
            slideUrl: '/imgs/slides/17/passo17.svg',
            text: 'Traçar pinças com suave curva',
            audioUrl: '/imgs/slides/17/passo17.ogg',
            videoUrl: '/imgs/slides/17/video17.mp4',
            pdfUrl: '/imgs/slides/base.pdf',
        },
        {
            slideUrl: '/imgs/slides/18/passo18.svg',
            text: 'Fechar as pinças e traçar a curva da cintura (marca a dobra da pinça)',
            audioUrl: '/imgs/slides/18/passo18.ogg',
            videoUrl: '/imgs/slides/18/video18.mp4',
            pdfUrl: '/imgs/slides/base.pdf',
        },
    ];

    showModal: boolean = false;
    currentAction?: ActionType | null;

    showAudioPlayer: boolean = false;

    handlePrevious(): void {
        if (this._currentSlideIndex > 0) {
            this._currentSlideIndex--;
            this.showAudioPlayer = false;
        }
    }

    handleNext(): void {
        if (this._currentSlideIndex < this.slides.length - 1) {
            this._currentSlideIndex++;
            this.showAudioPlayer = false;
        }
    }

    handlePlayAction(action: ActionType): void {
        if (action === ActionType.PlayAudio) {
            this.showAudioPlayer = !this.showAudioPlayer;
        }
        
        if (action === ActionType.PlayVideo
            || action === ActionType.Display3dModel
            || action === ActionType.DisplayAugmentedReality) {
            this.currentAction = action;
            this.showModal = true;
        }

        if (action === ActionType.DownloadDoc) {
            const link = document.createElement('a');
            link.target = '_blank';
            link.href = this.currentSlide.pdfUrl!;
            link.click();
        }
    }

    handleCloseModal(ev: any): void {
        this.showModal = false;
    }
}
