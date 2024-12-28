import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-splas-page',
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
  standalone: true,
  imports: [RouterLink],
})
export class HomePage implements OnInit {
    ngOnInit(): void {
        // TODO
    }
}