import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@Component({
    selector: 'app-ar-view',
    template: `
    @if (show) {
        <div style="width: 50vw; height: 50vh;">
            <a-scene embedded arjs>
                <a-marker preset="hiro">
                    <a-box position="0 0.5 0" material="color: blue;"></a-box>
                </a-marker>
                <a-entity camera></a-entity>
            </a-scene>

        </div>
    }
    `,
    styles: [`
    `],
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true,
})
export class ArViewComponent implements OnInit {
    show = false;

    ngOnInit(): void {
        setTimeout(() => {
            this.show = true;
        }, 100);
    }
}