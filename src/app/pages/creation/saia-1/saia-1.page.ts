import { Component } from "@angular/core";
import { GalleryComponente, Photo } from "../../../shared/gallery/gallery.component";
import { ArrowsNavigationComponent } from "../components/arrows-navigation.component";

@Component({
    selector: 'app-saia-1-page',
    templateUrl: './saia-1.page.html',
    styleUrl: './saia-1.page.scss',
    standalone: true,
    imports: [GalleryComponente, ArrowsNavigationComponent],
})
export class Saia1Page {
    photos: Photo[] = [
        {
            id: 1,
            photoUrl: '/imgs/saias/1/photo1.jpg',
            thumbnailUrl: '/imgs/saias/1/photo1_thumbnail.png',
        },
        {
            id: 2,
            photoUrl: '/imgs/saias/1/photo2.jpg',
            thumbnailUrl: '/imgs/saias/1/photo2_thumbnail.png',
        },
        {
            id: 3,
            photoUrl: '/imgs/saias/1/photo3.jpg',
            thumbnailUrl: '/imgs/saias/1/photo3_thumbnail.png',
        },
        {
            id: 4,
            photoUrl: '/imgs/saias/1/photo4.jpg',
            thumbnailUrl: '/imgs/saias/1/photo4_thumbnail.png',
        },
        {
            id: 5,
            photoUrl: '/imgs/saias/1/photo5.jpg',
            thumbnailUrl: '/imgs/saias/1/photo5_thumbnail.png',
        },
    ];
}