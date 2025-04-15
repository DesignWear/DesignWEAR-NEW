import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { PageHeaderComponent } from "../../../shared/page-header/page-header.component";

@Component({
    selector: 'app-modeling-menu-page',
    templateUrl: './modeling-menu.page.html',
    imports: [PageHeaderComponent, RouterLink],
    styleUrl: './modeling-menu.page.scss',
    standalone: true,
})
export class ModelingMenuPage {}
