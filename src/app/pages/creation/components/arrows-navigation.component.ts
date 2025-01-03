import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-arrows-navigation',
    template: `
    <div class="arrows-navigation">
        @if (leftUrl) {
            <a [href]="leftUrl">
                <img src="/imgs/arrow_left.png">
            </a>
        } @else {
            <span></span>
        }
        @if (rightUrl) {
            <a [href]="rightUrl">
                <img src="/imgs/arrow_right.png">
            </a>
        } @else {
            <span></span>
        }
    </div>
    `,
    styles: `
    .arrows-navigation {
        display: flex;
        justify-content: space-between;
        margin: 1rem 1rem 0 1rem;

        a {
            display: block;
            width: 4rem;

            img {
                width: 100%;
            }
        }
    }
    `,
    imports: [],
    standalone: true,
})
export class ArrowsNavigationComponent implements OnInit {
    @Input() leftUrl?: string | null;
    @Input() rightUrl?: string | null;

    ngOnInit(): void {
        // TODO
    }
}