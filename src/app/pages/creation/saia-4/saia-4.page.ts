import { Component } from "@angular/core";
import { GalleryComponente, Photo } from "../../../shared/gallery/gallery.component";
import { ArrowsNavigationComponent } from "../components/arrows-navigation.component";

@Component({
    selector: 'app-saia-4-page',
    templateUrl: './saia-4.page.html',
    styleUrl: './saia-4.page.scss',
    imports: [GalleryComponente, ArrowsNavigationComponent],
    standalone: true,
})
export class Saia4Page {
    photos: Photo[] = [
        {
            id: 1,
            photoUrl: '/imgs/saias/4/photo1.jpg',
            thumbnailUrl: '/imgs/saias/4/photo1_thumbnail.png',
        },
        {
            id: 2,
            photoUrl: '/imgs/saias/4/photo2.jpg',
            thumbnailUrl: '/imgs/saias/4/photo2_thumbnail.png',
        },
        {
            id: 3,
            photoUrl: '/imgs/saias/4/photo3.jpg',
            thumbnailUrl: '/imgs/saias/4/photo3_thumbnail.png',
        },
        {
            id: 4,
            photoUrl: '/imgs/saias/4/photo4.jpg',
            thumbnailUrl: '/imgs/saias/4/photo4_thumbnail.png',
        },
        {
            id: 5,
            photoUrl: '/imgs/saias/4/photo5.jpg',
            thumbnailUrl: '/imgs/saias/4/photo5_thumbnail.png',
        },
        {
            id: 6,
            photoUrl: '/imgs/saias/4/photo6.jpg',
            thumbnailUrl: '/imgs/saias/4/photo6_thumbnail.png',
        },
        {
            id: 7,
            photoUrl: '/imgs/saias/4/photo7.jpg',
            thumbnailUrl: '/imgs/saias/4/photo7_thumbnail.png',
        },
    ];
}
