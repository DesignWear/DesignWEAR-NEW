import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-video-gallery-componente',
    templateUrl: './video-gallery.componente.html',
    styleUrl: './video-gallery.componente.scss',
    imports: [CommonModule],
    standalone: true,
})
export class VideoGalleryComponente {
    currentVideoIndex: number = 0;
    showVideo: boolean = false;
    videosArray: string[] = [];

    @Input() set videos(values: string[]) {
        this.videosArray = values;
        this.currentVideoIndex = 0;
        this.showVideo = true;
    }

    handlePrevious(): void {
        if (this.currentVideoIndex > 0) {
            this.showVideo = false;
            this.currentVideoIndex--;
            setTimeout(() => this.showVideo = true, 100);
        }
    }

    handleNext(): void {
        if (this.currentVideoIndex < this.videosArray.length - 1) {
            this.showVideo = false;
            this.currentVideoIndex++;
            setTimeout(() => this.showVideo = true, 100);
        }
    }
}