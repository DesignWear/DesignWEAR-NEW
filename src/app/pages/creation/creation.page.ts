import { Component } from "@angular/core";
import { PhotoGalleryComponent } from "./components/gallery/photo-gallery.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-creation-page',
    templateUrl: './creation.page.html',
    styleUrl: './creation.page.scss',
    imports: [PhotoGalleryComponent, RouterLink],
    standalone: true,
})
export class CreationPage {
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