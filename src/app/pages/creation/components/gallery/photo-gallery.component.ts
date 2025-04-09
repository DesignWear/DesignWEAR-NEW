import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PhotoGalleryComponent {
  @ViewChild('openedPhotoContainer') openedPhotoContainer!: ElementRef<HTMLDivElement>;

  @Input() photos: string[] = [];
  showModal: boolean = false;

  constructor(
    private readonly router: Router,
  ) { }
  
  currentIndex = 0;
  get photo(): string {
    return this.photos[this.currentIndex];
  }

  previous(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next(): void {
    if (this.currentIndex + 1 < this.photos.length) {
      this.currentIndex++;
    } else {
      this.router.navigate(['/app/frankensteins']);
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
