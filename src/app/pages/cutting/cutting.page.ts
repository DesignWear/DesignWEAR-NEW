import { Component } from "@angular/core";
import { ComparatorArComponent } from "../../shared/comparator-ar/comparator-ar.component";
import { RouterLink } from "@angular/router";

export type Slide = {
    text?: string | null;
    videoUrl?: string | null;
    showArBtn: boolean;
    imgUrls?: string[] | null;
}

@Component({
    selector: 'app-cutting-page',
    templateUrl: './cutting.page.html',
    styleUrl: './cutting.page.scss',
    imports: [ComparatorArComponent, RouterLink],
    standalone: true,
})
export class CuttingPage {
    showModal: boolean = false;
    showVideo: boolean = true;

    _currentSlideIndex: number = 0;
    get currentSlide(): Slide {
        return this.slides[this._currentSlideIndex];
    }

    slides: Slide[] = [
        {
            text: null,
            videoUrl: '/imgs/corte/corte_1.mp4',
            showArBtn: false,
            imgUrls: null,
        },
        {
            text: null,
            videoUrl: '/imgs/corte/corte_2.mp4',
            showArBtn: false,
            imgUrls: null,
        },
        {
            text: 'Apontar as imagens sobre seu tecido e ver sugestões de encaixe',
            videoUrl: '/imgs/corte/corte_3.mp4',
            showArBtn: true,
            imgUrls: [
                '/imgs/corte/AR_3.1.png',
                '/imgs/corte/AR_3.2.png',
                '/imgs/corte/AR_3.3.png',
                '/imgs/corte/AR_3.4.png',
                '/imgs/corte/AR_3.5.png',
            ],
        },
        {
            text: null,
            videoUrl: '/imgs/corte/corte_4.mp4',
            showArBtn: false,
            imgUrls: null,
        },
        {
            text: null,
            videoUrl: '/imgs/corte/corte_5.mp4',
            showArBtn: false,
            imgUrls: null,
        },
        {
            text: null,
            videoUrl: '/imgs/corte/corte_6.mp4',
            showArBtn: false,
            imgUrls: null,
        },
        {
            text: null,
            videoUrl: '/imgs/corte/corte_7.mp4',
            showArBtn: false,
            imgUrls: null,
        },
    ];

    handlePrevious(): void {
        if (this._currentSlideIndex > 0) {
            this.showVideo = false;
            this._currentSlideIndex--;
            setTimeout(() => this.showVideo = true, 100);
        }
    }

    handleNext(): void {
        if (this._currentSlideIndex < this.slides.length - 1) {
            this.showVideo = false;
            this._currentSlideIndex++;
            setTimeout(() => this.showVideo = true, 100);
        }
    }

    handleShowModal(): void {
        this.showModal = true;
    }
}
