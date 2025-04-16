import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { GamificationService, ModuleId } from '../../../../services/gamification.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class PhotoGalleryComponent implements OnInit {
  @ViewChild('openedPhotoContainer') openedPhotoContainer!: ElementRef<HTMLDivElement>;

  @Input() photos: string[] = [];
  showModal: boolean = false;

  constructor(
    private readonly router: Router,
    private readonly gamificationService: GamificationService,
  ) { }

  ngOnInit(): void {
    this.gamificationService.checkPoint({ moduleId: ModuleId.Criacao, value: this.currentIndex });
  }
  
  currentIndex = 0;
  get photo(): string {
    return this.photos[this.currentIndex];
  }

  displayCountingNavigator(): string {
    return `${this.currentIndex + 1} / ${this.photos.length}`;
  }

  previous(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next(): void {
    if (this.currentIndex + 1 < this.photos.length) {
      this.currentIndex++;
      this.gamificationService.checkPoint({ moduleId: ModuleId.Criacao, value: this.currentIndex });
    } else {
      this.router.navigate(['/app/creation/frankensteins']);
    }
  }

  openModal(): void {
    this.showModal = true;

    setTimeout(() => {
      this.centerScrollbars();
    }, 0);
  }

  centerScrollbars(): void {
    if (!this.openedPhotoContainer) return;
    
    const container = this.openedPhotoContainer.nativeElement;
    const img = container.querySelector('img');
    
    if (img) {
      // Calcula o centro da imagem
      const scrollLeft = (img.naturalWidth - container.clientWidth) / 2;
      const scrollTop = (img.naturalHeight - container.clientHeight) / 2;
      
      // Posiciona os scrollbars no centro
      container.scrollLeft = scrollLeft > 0 ? scrollLeft : 0;
      container.scrollTop = scrollTop > 0 ? scrollTop : 0;
    }
  }
}
