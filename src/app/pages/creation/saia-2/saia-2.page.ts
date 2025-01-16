import { Component } from "@angular/core";
import { GalleryComponente, Photo } from "../../../shared/gallery/gallery.component";
import { ArrowsNavigationComponent } from "../components/arrows-navigation.component";

@Component({
    selector: 'app-saia-2-page',
    templateUrl: './saia-2.page.html',
    styleUrl: './saia-2.page.scss',
    imports: [GalleryComponente, ArrowsNavigationComponent],
    standalone: true,
})
export class Saia2Page {
    photos: Photo[] = [
        {
            id: 1,
            photoUrl: '/imgs/saias/2/photo1.jpg',
            thumbnailUrl: '/imgs/saias/2/photo1_thumbnail.png',
        },
        {
            id: 2,
            photoUrl: '/imgs/saias/2/photo2.jpg',
            thumbnailUrl: '/imgs/saias/2/photo2_thumbnail.png',
        },
        {
            id: 3,
            photoUrl: '/imgs/saias/2/photo3.jpg',
            thumbnailUrl: '/imgs/saias/2/photo3_thumbnail.png',
        },
        {
            id: 4,
            photoUrl: '/imgs/saias/2/photo4.jpg',
            thumbnailUrl: '/imgs/saias/2/photo4_thumbnail.png',
        },
    ];
}