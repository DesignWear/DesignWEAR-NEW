import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";

export type Photo = {
    id: number;
    photoUrl: string;
    thumbnailUrl: string;
}

@Component({
    selector: 'app-gallery-component',
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss',
    imports: [],
    standalone: true,
})
export class GalleryComponente implements OnInit {
    currentPhoto?: Photo;
    @Input() photos: Photo[] = [];
    @ViewChild('modal') modal!: ElementRef<HTMLDivElement>;
    showModal: boolean = false;

    ngOnInit(): void {
        this.currentPhoto = this.photos.at(0);
    }

    selectPhoto(photo: Photo): void {
        this.currentPhoto = photo;
    }

    handleTouchstart(_: any): void {
        this.showModal = true;
        setTimeout(() => {
            const { nativeElement }: { nativeElement: HTMLDivElement } = this.modal;
            const img = nativeElement.children[0];
            nativeElement.scroll({ left: (img as HTMLImageElement).naturalWidth / 3 });
            nativeElement.scroll({ top: (img as HTMLImageElement).naturalHeight / 3 });
        }, 0);
    }

    handleClose(_: any): void {
        this.showModal = false;
    }
}