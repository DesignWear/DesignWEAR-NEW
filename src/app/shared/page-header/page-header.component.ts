import { Component, Input, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { GamificationService } from "../../services/gamification.service";

@Component({
    selector: 'app-page-header',
    template: `
<div class="create-title">
    <div>
        <div style="font-size:large;font-weight:bold;color:var(--secondary-color);">{{title}}</div>
        <div style="color:var(--primary-color);">Módulo {{module}}</div>
        <div style="font-size:smaller;color:var(--secondary-color);">{{subtitle}}</div>
    </div>
    <a routerLink="/home">
        <div style="font-size: x-small;padding-top: 1rem;">Voltar ao menu</div>
        <svg width="16" height="16" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
            @if (star >= 1) {
                <path style="fill:#3a1a5b" d="m 25.018028,28.603945 -9.05185,-4.8269 L 6.8582604,28.497299 8.6517402,18.396883 1.3480106,11.193378 11.508293,9.7778782 16.102257,0.60561306 20.588176,9.831202 l 10.142956,1.534734 -7.387831,7.117227 z" transform="matrix(1.0679856,0,0,1.0679856,-1.1302514,0.3262988)" />
            } @else {
                <path style="fill:#3a1a5b" d="m 25.018028,28.603945 -9.05185,-4.8269 L 6.8582604,28.497299 8.6517402,18.396883 1.3480106,11.193378 11.508293,9.7778782 16.102257,0.60561306 20.588176,9.831202 l 10.142956,1.534734 -7.387831,7.117227 z" transform="matrix(1.0679856,0,0,1.0679856,-1.1302514,0.3262988)" />
                <path style="fill:#ffffff" d="m 25.018028,28.603945 -9.05185,-4.8269 L 6.8582604,28.497299 8.6517402,18.396883 1.3480106,11.193378 11.508293,9.7778782 16.102257,0.60561306 20.588176,9.831202 l 10.142956,1.534734 -7.387831,7.117227 z" transform="matrix(0.88980797,0,0,0.88980797,1.7015132,3.2157047)" />
            }
        </svg>
        <svg width="16" height="16" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
            @if (star >= 2) {
                <path style="fill:#3a1a5b" d="m 25.018028,28.603945 -9.05185,-4.8269 L 6.8582604,28.497299 8.6517402,18.396883 1.3480106,11.193378 11.508293,9.7778782 16.102257,0.60561306 20.588176,9.831202 l 10.142956,1.534734 -7.387831,7.117227 z" transform="matrix(1.0679856,0,0,1.0679856,-1.1302514,0.3262988)" />
            } @else {
                <path style="fill:#3a1a5b" d="m 25.018028,28.603945 -9.05185,-4.8269 L 6.8582604,28.497299 8.6517402,18.396883 1.3480106,11.193378 11.508293,9.7778782 16.102257,0.60561306 20.588176,9.831202 l 10.142956,1.534734 -7.387831,7.117227 z" transform="matrix(1.0679856,0,0,1.0679856,-1.1302514,0.3262988)" />
                <path style="fill:#ffffff" d="m 25.018028,28.603945 -9.05185,-4.8269 L 6.8582604,28.497299 8.6517402,18.396883 1.3480106,11.193378 11.508293,9.7778782 16.102257,0.60561306 20.588176,9.831202 l 10.142956,1.534734 -7.387831,7.117227 z" transform="matrix(0.88980797,0,0,0.88980797,1.7015132,3.2157047)" />
            }
        </svg>
        <svg width="16" height="16" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
            @if (star >= 3) {
                <path style="fill:#3a1a5b" d="m 25.018028,28.603945 -9.05185,-4.8269 L 6.8582604,28.497299 8.6517402,18.396883 1.3480106,11.193378 11.508293,9.7778782 16.102257,0.60561306 20.588176,9.831202 l 10.142956,1.534734 -7.387831,7.117227 z" transform="matrix(1.0679856,0,0,1.0679856,-1.1302514,0.3262988)" />
            } @else {
                <path style="fill:#3a1a5b" d="m 25.018028,28.603945 -9.05185,-4.8269 L 6.8582604,28.497299 8.6517402,18.396883 1.3480106,11.193378 11.508293,9.7778782 16.102257,0.60561306 20.588176,9.831202 l 10.142956,1.534734 -7.387831,7.117227 z" transform="matrix(1.0679856,0,0,1.0679856,-1.1302514,0.3262988)" />
                <path style="fill:#ffffff" d="m 25.018028,28.603945 -9.05185,-4.8269 L 6.8582604,28.497299 8.6517402,18.396883 1.3480106,11.193378 11.508293,9.7778782 16.102257,0.60561306 20.588176,9.831202 l 10.142956,1.534734 -7.387831,7.117227 z" transform="matrix(0.88980797,0,0,0.88980797,1.7015132,3.2157047)" />
            }
        </svg>
        <svg width="16" height="16" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
            @if (star >= 4) {
                <path style="fill:#3a1a5b" d="m 25.018028,28.603945 -9.05185,-4.8269 L 6.8582604,28.497299 8.6517402,18.396883 1.3480106,11.193378 11.508293,9.7778782 16.102257,0.60561306 20.588176,9.831202 l 10.142956,1.534734 -7.387831,7.117227 z" transform="matrix(1.0679856,0,0,1.0679856,-1.1302514,0.3262988)" />
            } @else {
                <path style="fill:#3a1a5b" d="m 25.018028,28.603945 -9.05185,-4.8269 L 6.8582604,28.497299 8.6517402,18.396883 1.3480106,11.193378 11.508293,9.7778782 16.102257,0.60561306 20.588176,9.831202 l 10.142956,1.534734 -7.387831,7.117227 z" transform="matrix(1.0679856,0,0,1.0679856,-1.1302514,0.3262988)" />
                <path style="fill:#ffffff" d="m 25.018028,28.603945 -9.05185,-4.8269 L 6.8582604,28.497299 8.6517402,18.396883 1.3480106,11.193378 11.508293,9.7778782 16.102257,0.60561306 20.588176,9.831202 l 10.142956,1.534734 -7.387831,7.117227 z" transform="matrix(0.88980797,0,0,0.88980797,1.7015132,3.2157047)" />
            }
        </svg>
        <svg width="16" height="16" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
            @if (star >= 5) {
                <path style="fill:#3a1a5b" d="m 25.018028,28.603945 -9.05185,-4.8269 L 6.8582604,28.497299 8.6517402,18.396883 1.3480106,11.193378 11.508293,9.7778782 16.102257,0.60561306 20.588176,9.831202 l 10.142956,1.534734 -7.387831,7.117227 z" transform="matrix(1.0679856,0,0,1.0679856,-1.1302514,0.3262988)" />
            } @else {
                <path style="fill:#3a1a5b" d="m 25.018028,28.603945 -9.05185,-4.8269 L 6.8582604,28.497299 8.6517402,18.396883 1.3480106,11.193378 11.508293,9.7778782 16.102257,0.60561306 20.588176,9.831202 l 10.142956,1.534734 -7.387831,7.117227 z" transform="matrix(1.0679856,0,0,1.0679856,-1.1302514,0.3262988)" />
                <path style="fill:#ffffff" d="m 25.018028,28.603945 -9.05185,-4.8269 L 6.8582604,28.497299 8.6517402,18.396883 1.3480106,11.193378 11.508293,9.7778782 16.102257,0.60561306 20.588176,9.831202 l 10.142956,1.534734 -7.387831,7.117227 z" transform="matrix(0.88980797,0,0,0.88980797,1.7015132,3.2157047)" />
            }
        </svg>
    </a>
</div>
    `,
    styles: `
.create-title {
    display: flex;
    justify-content: space-between;
    margin: 1rem;
}
    `,
    imports: [RouterLink],
    standalone: true,
})
export class PageHeaderComponent implements OnInit {
    @Input() title: string = '';
    @Input() module: string = '';
    @Input() subtitle: string = '';

    star: number = 0;

    constructor(
        private readonly gameficationService: GamificationService,
    ) { }

    addStar(): void {
        const result = localStorage.getItem('DesignWear:gamification');
        if (result) {
            const data = JSON.parse(result);
            this.star = [data.moduleOne, data.moduleTwo, data.moduleThree, data.moduleFour, data.moduleFive].filter((item) => item).length;
        }
    }

    ngOnInit(): void {
        this.addStar();
        this.gameficationService.checkPointEvent.subscribe((data) => this.addStar());
    }
}