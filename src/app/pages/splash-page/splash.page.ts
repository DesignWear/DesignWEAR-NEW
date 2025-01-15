import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-splas-page',
  templateUrl: './splash.page.html',
  styleUrl: './splash.page.css',
  standalone: true,
})
export class SplashPage implements OnInit {

  constructor(
    private readonly route: Router,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.route.navigate(['/app/home']);
    }, 3000);
  }
}
