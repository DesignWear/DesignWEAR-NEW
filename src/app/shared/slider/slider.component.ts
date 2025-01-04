import { Component, OnInit } from "@angular/core";

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
}

@Component({
    selector: 'app-slider-component',
    templateUrl: './slider.component.html',
    styleUrl: './slider.component.scss',
    imports: [],
    standalone: true,
})
export class SliderComponent implements OnInit {
    _currentSlideIndex: number = 0;
    get currentSlide(): Slide {
        return this.slides.at(this._currentSlideIndex)!;
    }

    slides: Slide[] = [
        {
            slideUrl: '/imgs/slides/slide_1.svg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit placeat, dignissimos iste cupiditate quas ullam asperiores Voluptatibus deleniti modi, voluptatum alias quibusdam obcaecati!',
        },
        {
            slideUrl: '/imgs/slides/slide_2.svg',
            text: 'Placeat, dignissimos iste cupiditate quas ullam asperiores, Lorem ipsum dolor sit amet, consectetur adipisicing elit placeat, Voluptatibus deleniti modi, voluptatum alias quibusdam obcaecati',
        },
        {
            slideUrl: '/imgs/slides/slide_3.svg',
            text: 'Deleniti modi, voluptatum alias quibusdam obcaecati!, Imposto é roubo. Placeat, dignissimos iste cupiditate quas ullam asperiores, Lorem ipsum dolor sit amet.',
        },
        {
            slideUrl: '/imgs/slides/slide_4.svg',
            text: 'Voluptatibus deleniti modi, voluptatum alias quibusdam obcaecati! Lorem ipsum dolor sit amet, consectetur adipisicing elit placeat, dignissimos iste cupiditate quas ullam asperiores',
        },
    ];

    ngOnInit(): void {
    }

    handlePrevious(): void {
        if (this._currentSlideIndex > 0) {
            this._currentSlideIndex--;
        }
    }

    handleNext(): void {
        if (this._currentSlideIndex < this.slides.length - 1) {
            this._currentSlideIndex++;
        }
    }

    handlePlayAction(action: ActionType): void {
        // TODO
        console.log(action)
    }
}
