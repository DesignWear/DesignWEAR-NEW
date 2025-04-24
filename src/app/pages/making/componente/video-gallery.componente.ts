import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { GamificationService, ModuleId } from "../../../services/gamification.service";

@Component({
    selector: 'app-video-gallery-componente',
    templateUrl: './video-gallery.componente.html',
    styleUrl: './video-gallery.componente.scss',
    imports: [CommonModule],
    standalone: true,
})
export class VideoGalleryComponente {
    @Input() currentVideoIndex: number = 0;
    showVideo: boolean = false;
    videosArray: string[] = [];

    @Input() set videos(values: string[]) {
        this.videosArray = values;
        this.currentVideoIndex = 0;
        this.showVideo = true;
    }

    @Output() currentVideoIndexChange = new EventEmitter<number>();

    constructor(
        private readonly gamificationService: GamificationService,
    ) { }

    handlePrevious(): void {
        if (this.currentVideoIndex > 0) {
            this.showVideo = false;
            this.currentVideoIndex--;
            this.currentVideoIndexChange.emit(this.currentVideoIndex);
            setTimeout(() => this.showVideo = true, 100);
        }
    }

    handleNext(): void {
        if (this.currentVideoIndex < this.videosArray.length - 1) {
            this.showVideo = false;
            this.currentVideoIndex++;
            this.currentVideoIndexChange.emit(this.currentVideoIndex);
            setTimeout(() => this.showVideo = true, 100);

            if (this.currentVideoIndex === this.videosArray.length - 1) {
                this.gamificationService.checkPoint({ moduleId: ModuleId.Confecao, value: 'makingDone' });
            }
        }
    }

    displayCurrentVideo(): string {
        return `${this.currentVideoIndex + 1} / ${this.videosArray.length}`;
    }
}