import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: 'app-comparator-ar-component',
    template: `
    <div class="container">
        <img [src]="slideUrl">
        <video #video autoplay playsinline></video>
        @if (slideUrls && slideUrls.length > 0) {
            <div class="pagination-content">
                @for (item of slideUrls; track item; let i = $index) {
                    <div class="pagination-btn noselect" (click)="handleSelect(i)">{{ i + 1 }}</div>
                }
            </div>
        }
    </div>
    @if (hasMultipleCameras) {
        <div class="change-camera-btn">
            <img src="/imgs/change_camera_icon.png" (click)="switchCamera()">
        </div>
    }
    `,
    styles: `
    .container {
        display: flex;
        width: 100vw;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .pagination-content {
        margin: 1rem 0;
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .pagination-btn {
        text-align: center;
        color: white;
        background: var(--primary-color);
        padding: 12px;
        width: 25px;
        height: 25px;
        border-radius: 25px;
    }
    img {
        position: absolute;
        width: 95vw;
    }
    video {
        width: 100vw;
    }
    .change-camera-btn {
        height: 3.5rem;
        display: flex;
        justify-content: center;
    }
    .change-camera-btn > img {
        width: 3rem;
    }
    `,
    imports: [],
    standalone: true,
})
export class ComparatorArComponent implements OnInit {
    @Input() slideUrl?: string;
    @Input() slideUrls?: string[];
    @ViewChild('video', { static: true }) videoElement!: ElementRef<HTMLVideoElement>;

    private currentStream: MediaStream | null = null;
    private currentDeviceId: string | null = null;

    hasMultipleCameras: boolean = false; // Indica se há mais de uma câmera disponível

    ngOnInit(): void {
        this.checkCameras().then(() => this.startCamera());
        
        if (this.slideUrls && this.slideUrls.length > 0) {
            this.slideUrl = this.slideUrls.at(0);
        }
    }

    // Verifica se há mais de uma câmera disponível
    private async checkCameras(): Promise<void> {
        try {
            const cameras = await this.getAvailableCameras();
            this.hasMultipleCameras = cameras.length > 1;
        } catch (error) {
            console.error('Erro ao verificar câmeras:', error);
            this.hasMultipleCameras = false; // Garantir um estado consistente
        }
    }

    private async getAvailableCameras(): Promise<MediaDeviceInfo[]> {
        const devices = await navigator.mediaDevices.enumerateDevices();
        return devices.filter(device => device.kind === 'videoinput');
    }

    private async startCamera(deviceId?: string): Promise<void> {
        if (this.currentStream) {
            this.currentStream.getTracks().forEach(track => track.stop());
        }

        try {
            const constraints: MediaStreamConstraints = {
                video: deviceId ? { deviceId: { exact: deviceId } } : true,
                audio: false,
            };
            this.currentStream = await navigator.mediaDevices.getUserMedia(constraints);
            this.videoElement.nativeElement.srcObject = this.currentStream;

            if (deviceId) {
                this.currentDeviceId = deviceId;
            }
        } catch (error) {
            console.error('Erro ao acessar a câmera:', error);
        }
    }

    async switchCamera(): Promise<void> {
        const cameras = await this.getAvailableCameras();

        if (cameras.length > 1) {
            const currentIndex = cameras.findIndex(camera => camera.deviceId === this.currentDeviceId);
            const nextIndex = (currentIndex + 1) % cameras.length;
            const nextCamera = cameras[nextIndex];

            this.startCamera(nextCamera.deviceId);
        } else {
            console.warn('Não há mais de uma câmera disponível para trocar.');
        }
    }

    handleSelect(i: number): void {
        this.slideUrl = this.slideUrls?.at(i);
    }
}
