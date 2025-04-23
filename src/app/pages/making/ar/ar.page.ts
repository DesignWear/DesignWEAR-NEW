import { Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
    selector: 'app-ar',
    templateUrl: './ar.page.html',
    styleUrl: './ar.page.scss',
    imports: [],
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ArPage implements OnInit, OnDestroy {
    arHtml!: SafeHtml;

    constructor(
        private readonly router: Router,
        private readonly sanitizer: DomSanitizer,
    ) { }

    ngOnInit(): void {
        this.arHtml = this.sanitizer.bypassSecurityTrustHtml(`
            <a-scene
                id="my-scene"
                mindar-image="imageTargetSrc: /imgs/ar/hack_x.mind;"
                embedded
                color-space="sRGB"
                renderer="colorManagement: true, physicallyCorrectLights"
                vr-mode-ui="enabled: false"
                device-orientation-permission-ui="enabled: false">

                <a-assets>
                    <img id="hack-1" src="/imgs/ar/hack_1.png">
                    <img id="hack-2" src="/imgs/ar/hack_2.png">
                    <img id="hack-3" src="/imgs/ar/hack_3.png">
                    <img id="hack-4" src="/imgs/ar/hack_4.png">
                    <img id="hack-5" src="/imgs/ar/hack_5.png">
                    <img id="hack-6" src="/imgs/ar/hack_6.png">
                    <img id="hack-7" src="/imgs/ar/hack_7.png">
                    <img id="hack-8" src="/imgs/ar/hack_8.png">
                    <img id="hack-9" src="/imgs/ar/hack_9.png">
                </a-assets>
                
                <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="near: 10; far: 10000; objects: .clickable"></a-camera>
                
                <a-entity mindar-image-target="targetIndex: 0">
                    <a-image id="image-1" class="clickable" position="0 0 0" height="1" width="1" src="#hack-1"></a-image>
                </a-entity>

                <a-entity mindar-image-target="targetIndex: 1">
                    <a-image id="image-2" class="clickable" position="0 0 0" height="1" width="1" src="#hack-2"></a-image>
                </a-entity>

                <a-entity mindar-image-target="targetIndex: 2">
                    <a-image id="image-3" class="clickable" position="0 0 0" height="1" width="1" src="#hack-3"></a-image>
                </a-entity>

                <a-entity mindar-image-target="targetIndex: 3">
                    <a-image id="image-4" class="clickable" position="0 0 0" height="1" width="1" src="#hack-4"></a-image>
                </a-entity>

                <a-entity mindar-image-target="targetIndex: 4">
                    <a-image id="image-5" class="clickable" position="0 0 0" height="1" width="1" src="#hack-5"></a-image>
                </a-entity>

                <a-entity mindar-image-target="targetIndex: 5">
                    <a-image id="image-6" class="clickable" position="0 0 0" height="1" width="1" src="#hack-6"></a-image>
                </a-entity>

                <a-entity mindar-image-target="targetIndex: 6">
                    <a-image id="image-7" class="clickable" position="0 0 0" height="1" width="1" src="#hack-7"></a-image>
                </a-entity>

                <a-entity mindar-image-target="targetIndex: 7">
                    <a-image id="image-8" class="clickable" position="0 0 0" height="1" width="1" src="#hack-8"></a-image>
                </a-entity>

                <a-entity mindar-image-target="targetIndex: 8">
                    <a-image id="image-9" class="clickable" position="0 0 0" height="1" width="1" src="#hack-9"></a-image>
                </a-entity>
            </a-scene>
        `);
    }

    ngAfterViewInit(): void {
        const examplePlane1 = document.querySelector('#image-1')!;
        examplePlane1.addEventListener("click", (_: any) => {
            this.router.navigate(['/app/making/ar-video'], {
                queryParams: {
                    video: '1',
                },
            });
        });

        const examplePlane2 = document.querySelector('#image-2')!;
        examplePlane2.addEventListener("click", (_: any) => {
            this.router.navigate(['/app/making/ar-video'], {
                queryParams: {
                    video: '2',
                },
            });
        });

        const examplePlane3 = document.querySelector('#image-3')!;
        examplePlane3.addEventListener("click", (_: any) => {
            this.router.navigate(['/app/making/ar-video'], {
                queryParams: {
                    video: '3',
                },
            });
        });

        const examplePlane4 = document.querySelector('#image-4')!;
        examplePlane4.addEventListener("click", (_: any) => {
            this.router.navigate(['/app/making/ar-video'], {
                queryParams: {
                    video: '4',
                },
            });
        });

        const examplePlane5 = document.querySelector('#image-5')!;
        examplePlane5.addEventListener("click", (_: any) => {
            this.router.navigate(['/app/making/ar-video'], {
                queryParams: {
                    video: '5',
                },
            });
        });

        const examplePlane6 = document.querySelector('#image-6')!;
        examplePlane6.addEventListener("click", (_: any) => {
            this.router.navigate(['/app/making/ar-video'], {
                queryParams: {
                    video: '6',
                },
            });
        });

        const examplePlane7 = document.querySelector('#image-7')!;
        examplePlane7.addEventListener("click", (_: any) => {
            this.router.navigate(['/app/making/ar-video'], {
                queryParams: {
                    video: '7',
                },
            });
        });

        const examplePlane8 = document.querySelector('#image-8')!;
        examplePlane8.addEventListener("click", (_: any) => {
            this.router.navigate(['/app/making/ar-video'], {
                queryParams: {
                    video: '8',
                },
            });
        });

        const examplePlane9 = document.querySelector('#image-9')!;
        examplePlane9.addEventListener("click", (_: any) => {
            this.router.navigate(['/app/making/ar-video'], {
                queryParams: {
                    video: '9',
                },
            });
        });
    }

    ngOnDestroy(): void {
        this.arHtml = '';
        const elements = document.querySelectorAll('.mindar-ui-overlay');
        for (let i = 0; i < elements.length; i++) {
            elements[i].remove();
        }
    }

    onClose(): void {
        this.router.navigate(['/app/making/sequences']);
    }
}

