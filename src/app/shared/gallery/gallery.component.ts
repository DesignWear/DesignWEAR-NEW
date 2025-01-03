import { Component, Input, OnInit } from "@angular/core";

export type Photo = {
    id: number;
    photoUrl: string;
    thumbnailUrl: string;
}

@Component({
    selector: 'app-gallery-component',
    templateUrl: './gallery.component.html',
    styleUrl: './gallery.component.scss',
    standalone: true,
    imports: [],
})
export class GalleryComponente implements OnInit {
    currentPhoto?: Photo;
    @Input() photos: Photo[] = [];

    ngOnInit(): void {
        this.currentPhoto = this.photos.at(0);
    }

    selectPhoto(photo: Photo): void {
        this.currentPhoto = photo;
    }
}