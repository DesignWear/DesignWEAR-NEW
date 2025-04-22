import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from "@angular/core";
import { PageHeaderComponent } from "../../../../shared/page-header/page-header.component";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-model-view-page',
    templateUrl: './model-view.page.html',
    styleUrl: './model-view.page.scss',
    imports: [PageHeaderComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true,
})
export class ModelViewPage implements OnInit {
    model: number = 0;
    
    constructor(
        private readonly route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe((params) => {
            this.model = params['model'];
        });
    }
}
