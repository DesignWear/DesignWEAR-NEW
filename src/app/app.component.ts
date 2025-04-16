import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamificationService } from './services/gamification.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent implements OnInit {
  showMesssage: boolean = false;
  message: string = '';

  constructor(
    private readonly gameficationService: GamificationService,
  ) { }

  ngOnInit(): void {
    this.gameficationService.completionEvent.subscribe((message: string) => {
      setTimeout(() => {
        this.message = message;
        this.showMesssage = true;
        setTimeout(() => this.showMesssage = false, 8000);
      }, 0);
    });
  }
}
