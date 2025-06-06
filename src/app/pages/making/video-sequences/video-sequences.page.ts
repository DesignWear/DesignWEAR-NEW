import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { VideoGalleryComponente } from "../componente/video-gallery.componente";
import { PageHeaderComponent } from "../../../shared/page-header/page-header.component";
import { RouterLink } from "@angular/router";

type Sequence = {
    key: string;
    values: number[];
}

@Component({
    selector: 'app-video-sequences',
    templateUrl: './video-sequences.page.html',
    styleUrl: './video-sequences.page.scss',
    imports: [
        CommonModule,
        FormsModule,
        VideoGalleryComponente,
        PageHeaderComponent,
        RouterLink,
    ],
    standalone: true,
})
export class VideoSequencesPage {
    showGallery: boolean = false;
    videos: string[] = [];

    select1Id?: string = '0';
    select2Id?: string = '0';
    select3Id?: string = '0';
    currentVideoIndex: number = 0;

    sequences: Sequence[] = [
        { key: '1.1.1', values: [1, 2, 11, 12, 13, 8] },
        { key: '1.1.2', values: [1, 2, 11, 12, 13, 14] },
        { key: '1.2.1', values: [1, 2, 3, 4, 5, 6, 7, 8] },
        { key: '1.2.2', values: [1, 2, 3, 4, 5, 6, 7, 14] },

        { key: '2.1.1', values: [2, 11, 12, 13, 8] },
        { key: '2.1.2', values: [2, 11, 12, 13, 14] },
        { key: '2.2.1', values: [2, 3, 4, 5, 6, 7, 8] },
        { key: '2.2.2', values: [2, 3, 4, 5, 6, 7, 14] },

        { key: '3.1.1', values: [9, 10, 11, 12, 13, 8] },
        { key: '3.1.2', values: [9, 10, 11, 12, 13, 14] },
        { key: '3.2.1', values: [9, 10, 3, 4, 5, 6, 7, 8] },
        { key: '3.2.2', values: [9, 10, 3, 4, 5, 6, 7, 14] },
    ]

    constructor() {
        const result = localStorage.getItem('DesignWear:videoSequencesState');
        if (result) {
            const state = JSON.parse(result);
            this.select1Id = state.select1Id;
            this.select2Id = state.select2Id;
            this.select3Id = state.select3Id;
            this.currentVideoIndex = state.currentVideoIndex;
        } else {
            localStorage.setItem('DesignWear:videoSequencesState', JSON.stringify({
                select1Id: '0',
                select2Id: '0',
                select3Id: '0',
                currentVideoIndex: 0,
            }));
        }
        this.handleSelectChange();
    }

    saveState(): void {
        localStorage.setItem('DesignWear:videoSequencesState', JSON.stringify({
            select1Id: this.select1Id,
            select2Id: this.select2Id,
            select3Id: this.select3Id,
            currentVideoIndex: this.currentVideoIndex,
        }));
    }

    handleChangeVideo(index: number): void {
        this.currentVideoIndex = index;
        this.saveState();
    }

    handleSelectChange(): void {
        this.showGallery = false;
        const sequence = this.sequences.find(sequence => sequence.key === `${this.select1Id}.${this.select2Id}.${this.select3Id}`);

        if (!sequence) {
            return;
        }

        setTimeout(() => {
            this.videos = sequence.values.map((item) => `imgs/making/COSTURA_${item}.mp4`);
            this.showGallery = true;
            this.saveState();
        }, 100);
    }
}
