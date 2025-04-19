import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";

@Component({
    selector: 'app-ar-video',
    templateUrl: './ar-video.page.html',
    styleUrl: './ar-video.page.scss',
    imports: [RouterLink],
    standalone: true,
})
export class ArVideoPage implements OnInit {
    showVideo: boolean = false;
    videoUrl: string = '';

    constructor(
        private readonly router: Router,
        private readonly route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            const video = params['video'];
            if (video) {
                this.videoUrl = `/imgs/ar/hack_${video}.mp4`;
                this.showVideo = true;
            }
        });
    }
    
    // this.router.navigate(['/app/making/ar']);
}
