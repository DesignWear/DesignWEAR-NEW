import { Component, OnInit } from "@angular/core"
import { RouterLink } from "@angular/router"
import { PageHeaderComponent } from "../../../shared/page-header/page-header.component"

@Component({
    selector: 'app-models-3d-page',
    templateUrl: './models-3d.page.html',
    styleUrl: './models-3d.page.scss',
    imports: [PageHeaderComponent, RouterLink],
    standalone: true,
})
export class Models3dPage { }
