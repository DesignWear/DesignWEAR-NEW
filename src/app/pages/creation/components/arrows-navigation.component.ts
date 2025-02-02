import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-arrows-navigation',
    template: `
    <div class="arrows-navigation">
        @if (leftUrl) {
            <a [routerLink]="leftUrl">
                <img src="/imgs/arrow_left.png">
            </a>
        } @else {
            <span></span>
        }
        @if (rightUrl) {
            <a [routerLink]="rightUrl">
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
    imports: [RouterLink],
    standalone: true,
})
export class ArrowsNavigationComponent {
    @Input() leftUrl?: string | null;
    @Input() rightUrl?: string | null;
}