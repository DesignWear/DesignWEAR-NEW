import { Component, OnInit } from "@angular/core";
import { ComparatorArComponent } from "../comparator-ar/comparator-ar.component";
import { GltfViewerComponent } from "../gltf-viewer/gltf-viewer.component";
import { Router } from "@angular/router";
import { GamificationService, ModuleId } from "../../services/gamification.service";

export enum ActionType {
    PlayAudio = 1,
    PlayVideo = 2,
    DownloadDoc = 3,
    DisplayModel3d = 4,
    DisplayAugmentedReality = 5,
    DisplayImagem = 6,
}

export type Slide = {
    slideUrl: string;
    text: string;
    audioUrl?: string | undefined;
    videoUrl?: string | undefined;
    pdfUrl?: string | undefined;
    model3dUrl?: string | undefined;
    imageUrl?: string | undefined;
}

@Component({
    selector: 'app-slider-component',
    templateUrl: './slider.component.html',
    styleUrl: './slider.component.scss',
    imports: [ComparatorArComponent, GltfViewerComponent],
    standalone: true,
})
export class SliderComponent implements OnInit {
    _currentSlideIndex: number = 0;
    
    get currentSlide(): Slide {
        return this.slides.at(this._currentSlideIndex)!;
    }

    slides: Slide[] = [
        {
            slideUrl: '/imgs/slides/1/passo1.svg',
            audioUrl: '/imgs/slides/1/passo1.mp3',
            videoUrl: '/imgs/slides/1/passo1.mp4',
            text: `Fazer retângulo:
1→2 e 3→4 = Anca÷2 + Folga Anca÷2 (47cm)
1→3 e 2→4 = Comprimento da Base (45cm)`,
        },
        {
            slideUrl: '/imgs/slides/2/passo2.svg',
            audioUrl: '/imgs/slides/2/passo2.mp3',
            videoUrl: '/imgs/slides/2/passo2.mp4',
            text: '1→5 e 2→6 = Cintura até Anca (20,3cm)',
        },
        {
            slideUrl: '/imgs/slides/3/passo3.svg',
            audioUrl: '/imgs/slides/3/passo3.mp3',
            videoUrl: '/imgs/slides/3/passo3.mp4',
            text: '7 = Dividir Retângulo ao meio',
        },
        {
            slideUrl: '/imgs/slides/4/passo4.svg',
            audioUrl: '/imgs/slides/4/passo4.mp3',
            videoUrl: '/imgs/slides/4/passo4.mp4',
            text: `7→8 = subir 2cm
1→9 e 2→10 =
Cint÷4 + 3 (pinça) + Folga Cint÷4 (20,25cm)`,
        },
        {
            slideUrl: '/imgs/slides/5/passo5.svg',
            audioUrl: '/imgs/slides/5/passo5.mp3',
            videoUrl: '/imgs/slides/5/passo5.mp4',
            text: `1→11 e 1→12 = Peito÷10 + 1cm (9,4cm)
                    
Marcar 1,5cm para cada lado

11→13 = 14cm
12→14 = 12cm`,
        },
        {
            slideUrl: '/imgs/slides/6/passo6.svg',
            audioUrl: '/imgs/slides/6/passo6.mp3',
            videoUrl: '/imgs/slides/6/passo6.mp4',
            text: `1→15 = 1,5cm
2→16 = 1cm
Traçar linha de apoio 90◦
`,
        },
        {
            slideUrl: '/imgs/slides/7/passo7.svg',
            audioUrl: '/imgs/slides/7/passo7.mp3',
            videoUrl: '/imgs/slides/7/passo7.mp4',
            text: `Fechar pinças e traçar Cintura com curva`,
        },
    ];

    showModal: boolean = false;
    currentAction?: ActionType | null;
    showAudioPlayer: boolean = false;

    constructor(
        private readonly router: Router,
        private readonly gamificationService: GamificationService,
    ) { }
    
    ngOnInit(): void {
        this.gamificationService.checkPoint({ moduleId: ModuleId.Base, value: this._currentSlideIndex });
    }

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
            this.gamificationService.checkPoint({ moduleId: ModuleId.Base, value: this._currentSlideIndex });
        }
    }

    handlePlayAction(action: ActionType): void {
        if (action === ActionType.PlayAudio) {
            this.showAudioPlayer = !this.showAudioPlayer;
        }
        
        if (action === ActionType.PlayVideo
            || action === ActionType.DisplayModel3d
            || action === ActionType.DisplayAugmentedReality
            || action === ActionType.DisplayImagem) {
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

    handleClaculator(): void {
        this.router.navigate(['/app/base/calculator']);
    }
}
