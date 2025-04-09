import { Component } from "@angular/core";
import { ComparatorArComponent } from "../comparator-ar/comparator-ar.component";
import { GltfViewerComponent } from "../gltf-viewer/gltf-viewer.component";

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
export class SliderComponent {
    _currentSlideIndex: number = 0;
    
    get currentSlide(): Slide {
        return this.slides.at(this._currentSlideIndex)!;
    }

    slides: Slide[] = [
        {
            slideUrl: '/imgs/slides/1/passo1.svg',
            audioUrl: '/imgs/slides/1/passo1.mp3',
            videoUrl: '/imgs/slides/1/passo1.mp4',
            text: '',
        },
        {
            slideUrl: '/imgs/slides/2/passo2.svg',
            audioUrl: '/imgs/slides/2/passo2.mp3',
            videoUrl: '/imgs/slides/2/passo2.mp4',
            text: '',
        },
        {
            slideUrl: '/imgs/slides/3/passo3.svg',
            audioUrl: '/imgs/slides/3/passo3.mp3',
            videoUrl: '/imgs/slides/3/passo3.mp4',
            text: '',
        },
        {
            slideUrl: '/imgs/slides/4/passo4.svg',
            audioUrl: '/imgs/slides/4/passo4.mp3',
            videoUrl: '/imgs/slides/4/passo4.mp4',
            text: '',
        },
        {
            slideUrl: '/imgs/slides/5/passo5.svg',
            audioUrl: '/imgs/slides/5/passo5.mp3',
            videoUrl: '/imgs/slides/5/passo5.mp4',
            text: '',
        },
        {
            slideUrl: '/imgs/slides/6/passo6.svg',
            audioUrl: '/imgs/slides/6/passo6.mp3',
            videoUrl: '/imgs/slides/6/passo6.mp4',
            text: '',
        },
        {
            slideUrl: '/imgs/slides/7/passo7.svg',
            audioUrl: '/imgs/slides/7/passo7.mp3',
            videoUrl: '/imgs/slides/7/passo7.mp4',
            text: '',
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
}
