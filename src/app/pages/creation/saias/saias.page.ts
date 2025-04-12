import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PhotoGalleryComponent } from "../components/gallery/photo-gallery.component";

@Component({
    selector: 'app-saias-page',
    templateUrl: './saias.page.html',
    styleUrl: './saias.page.scss',
    imports: [PhotoGalleryComponent, RouterLink],
    standalone: true,
})
export class SaiasPage {
    photos: string[] = [
        '/imgs/saias/1/photo1.jpg',
        '/imgs/saias/1/photo2.jpg',
        '/imgs/saias/1/photo3.jpg',
        '/imgs/saias/2/photo1.jpg',
        '/imgs/saias/2/photo2.jpg',
        '/imgs/saias/2/photo3.jpg',
        '/imgs/saias/3/photo1.jpg',
        '/imgs/saias/3/photo2.jpg',
        '/imgs/saias/3/photo3.jpg',
        '/imgs/saias/4/photo1.jpg',
        '/imgs/saias/4/photo2.jpg',
        '/imgs/saias/4/photo3.jpg',
        '/imgs/saias/4/photo4.jpg',
        '/imgs/saias/4/photo5.jpg',
        '/imgs/saias/4/photo6.jpg',
        '/imgs/saias/4/photo7.jpg',
    ];
}