import { Component, OnInit } from "@angular/core";
import { PhotoGalleryComponent } from "./components/gallery/photo-gallery.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-creation-page',
    templateUrl: './creation.page.html',
    styleUrl: './creation.page.scss',
    imports: [PhotoGalleryComponent, RouterLink],
    standalone: true,
})
export class CreationPage implements OnInit {
    photos: string[] = [
        '/imgs/saias/1/photo1.jpg',
        '/imgs/saias/1/photo2.jpg',
        '/imgs/saias/1/photo3.jpg',
        // '/imgs/saias/1/photo4.jpg',
        // '/imgs/saias/1/photo5.jpg',

        '/imgs/saias/2/photo1.jpg',
        '/imgs/saias/2/photo2.jpg',
        '/imgs/saias/2/photo3.jpg',
        // '/imgs/saias/2/photo4.jpg',

        '/imgs/saias/3/photo1.jpg',
        '/imgs/saias/3/photo2.jpg',
        '/imgs/saias/3/photo3.jpg',
        // '/imgs/saias/3/photo4.jpg',
        // '/imgs/saias/3/photo5.jpg',
        // '/imgs/saias/3/photo6.jpg',
        // '/imgs/saias/3/photo7.jpg',
        // '/imgs/saias/3/photo8.jpg',
        // '/imgs/saias/3/photo9.jpg',
        // '/imgs/saias/3/photo10.jpg',
        // '/imgs/saias/3/photo11.jpg',
        // '/imgs/saias/3/photo12.jpg',
        // '/imgs/saias/3/photo13.jpg',
        // '/imgs/saias/3/photo14.jpg',

        '/imgs/saias/4/photo1.jpg',
        '/imgs/saias/4/photo2.jpg',
        '/imgs/saias/4/photo3.jpg',
        '/imgs/saias/4/photo4.jpg',
        '/imgs/saias/4/photo5.jpg',
        '/imgs/saias/4/photo6.jpg',
        '/imgs/saias/4/photo7.jpg',
    ];

    ngOnInit(): void {
        // TODO
    }
}