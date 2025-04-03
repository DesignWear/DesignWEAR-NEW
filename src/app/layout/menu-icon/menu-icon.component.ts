import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-menu-icon',
    templateUrl: './menu-icon.componemt.html',
    styleUrl: './menu-icon.componemt.scss',
    standalone: true,
    imports: [],
})
export class MenuIconComponemt {
    @Input() id: string = '';
    @Input() isActive: boolean = false;

    get borderColor(): string {
        if (this.isActive) {
            return 'fill:white;stroke-width:0.434224';
        } else {
            return 'fill:#3a1a5b;stroke-width:0.434224';
        }
    }

    get bgColor(): string {
        if (this.isActive) {
            return 'fill:#A233DA;stroke-width:0.434224';
        } else {
            return 'fill:#ffffff;stroke-width:0.434224';
        }
    }

    get frontColor(): string {
        if (this.isActive) {
            return 'fill:white;stroke-width:0.434224';
        } else {
            return 'fill:#3a1a5b;stroke-width:0.434224';
        }
    }
}
