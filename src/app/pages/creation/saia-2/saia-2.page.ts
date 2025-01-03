import { Component, OnInit } from "@angular/core";
import { GalleryComponente, Photo } from "../../../shared/gallery/gallery.component";
import { ArrowsNavigationComponent } from "../components/arrows-navigation.component";

@Component({
    selector: 'app-saia-2-page',
    templateUrl: './saia-2.page.html',
    styleUrl: './saia-2.page.scss',
    imports: [GalleryComponente, ArrowsNavigationComponent],
    standalone: true,
})
export class Saia2Page implements OnInit {
    photos: Photo[] = [
        {
            id: 1,
            photoUrl: '/imgs/gallery/photo_1.png',
            thumbnailUrl: '/imgs/gallery/photo_1_thumbnail.png',
        },
        {
            id: 2,
            photoUrl: '/imgs/gallery/photo_2.png',
            thumbnailUrl: '/imgs/gallery/photo_2_thumbnail.png',
        },
        {
            id: 3,
            photoUrl: '/imgs/gallery/photo_3.png',
            thumbnailUrl: '/imgs/gallery/photo_3_thumbnail.png',
        },
        {
            id: 4,
            photoUrl: '/imgs/gallery/photo_1.png',
            thumbnailUrl: '/imgs/gallery/photo_1_thumbnail.png',
        },
        {
            id: 5,
            photoUrl: '/imgs/gallery/photo_2.png',
            thumbnailUrl: '/imgs/gallery/photo_2_thumbnail.png',
        },
        {
            id: 6,
            photoUrl: '/imgs/gallery/photo_3.png',
            thumbnailUrl: '/imgs/gallery/photo_3_thumbnail.png',
        },
    ];

    ngOnInit(): void {
        // TODO
    }
}