import { Component } from "@angular/core";
import { GalleryComponente, Photo } from "../../../shared/gallery/gallery.component";
import { ArrowsNavigationComponent } from "../components/arrows-navigation.component";

@Component({
    selector: 'app-saia-3-page',
    templateUrl: './saia-3.page.html',
    styleUrl: './saia-3.page.scss',
    imports: [GalleryComponente, ArrowsNavigationComponent],
    standalone: true,
})
export class Saia3Page {
    photos: Photo[] = [
        {
            id: 1,
            photoUrl: '/imgs/saias/3/photo1.jpg',
            thumbnailUrl: '/imgs/saias/3/photo1_thumbnail.png',
        },
        {
            id: 2,
            photoUrl: '/imgs/saias/3/photo2.jpg',
            thumbnailUrl: '/imgs/saias/3/photo2_thumbnail.png',
        },
        {
            id: 3,
            photoUrl: '/imgs/saias/3/photo3.jpg',
            thumbnailUrl: '/imgs/saias/3/photo3_thumbnail.png',
        },
        {
            id: 4,
            photoUrl: '/imgs/saias/3/photo4.jpg',
            thumbnailUrl: '/imgs/saias/3/photo4_thumbnail.png',
        },
        {
            id: 5,
            photoUrl: '/imgs/saias/3/photo5.jpg',
            thumbnailUrl: '/imgs/saias/3/photo5_thumbnail.png',
        },
        {
            id: 6,
            photoUrl: '/imgs/saias/3/photo6.jpg',
            thumbnailUrl: '/imgs/saias/3/photo6_thumbnail.png',
        },
        {
            id: 7,
            photoUrl: '/imgs/saias/3/photo7.jpg',
            thumbnailUrl: '/imgs/saias/3/photo7_thumbnail.png',
        },
        {
            id: 8,
            photoUrl: '/imgs/saias/3/photo8.jpg',
            thumbnailUrl: '/imgs/saias/3/photo8_thumbnail.png',
        },
        {
            id: 9,
            photoUrl: '/imgs/saias/3/photo9.jpg',
            thumbnailUrl: '/imgs/saias/3/photo9_thumbnail.png',
        },
        {
            id: 10,
            photoUrl: '/imgs/saias/3/photo10.jpg',
            thumbnailUrl: '/imgs/saias/3/photo10_thumbnail.png',
        },
        {
            id: 11,
            photoUrl: '/imgs/saias/3/photo11.jpg',
            thumbnailUrl: '/imgs/saias/3/photo11_thumbnail.png',
        },
        {
            id: 12,
            photoUrl: '/imgs/saias/3/photo12.jpg',
            thumbnailUrl: '/imgs/saias/3/photo12_thumbnail.png',
        },
        {
            id: 13,
            photoUrl: '/imgs/saias/3/photo13.jpg',
            thumbnailUrl: '/imgs/saias/3/photo13_thumbnail.png',
        },
        {
            id: 14,
            photoUrl: '/imgs/saias/3/photo14.jpg',
            thumbnailUrl: '/imgs/saias/3/photo14_thumbnail.png',
        },
    ];
}
