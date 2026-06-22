import { Component, computed, inject, signal } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Translation } from '@app/core/services/translation';

@Component({
  selector: 'app-figma-inspiration-dialog',
  standalone: true,
  imports: [MatDialogModule, MatIconModule],
  templateUrl: './figma-inspiration-dialog.html',
  styleUrl: './figma-inspiration-dialog.scss',
})
export class FigmaInspirationDialog {
  protected readonly tr = inject(Translation);
  private readonly dialogRef = inject(MatDialogRef<FigmaInspirationDialog>);

  readonly images = [
    'images/figma-inspiracion/figma-img-1.png',
    'images/figma-inspiracion/figma-img-2.png',
  ];

  readonly index = signal(0);
  readonly current = computed(() => this.images[this.index()]);

  // Lupa con zoom controlable por click y rueda del mouse.
  private readonly minZoom = 1;
  private readonly maxZoom = 4;
  private readonly wheelStep = 0.4;
  private readonly clickZoom = 2.5;

  readonly zoomLevel = signal(1);
  readonly zoomOrigin = signal('50% 50%');
  readonly isZoomed = computed(() => this.zoomLevel() > 1);

  private resetZoom(): void {
    this.zoomLevel.set(1);
  }

  next(): void {
    this.resetZoom();
    this.index.update(i => (i + 1) % this.images.length);
  }

  prev(): void {
    this.resetZoom();
    this.index.update(i => (i - 1 + this.images.length) % this.images.length);
  }

  goTo(i: number): void {
    this.resetZoom();
    this.index.set(i);
  }

  onMove(event: MouseEvent): void {
    const el = event.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    this.zoomOrigin.set(`${x}% ${y}%`);
  }

  // Click: alterna entre acercar y alejar.
  onClick(): void {
    this.zoomLevel.set(this.isZoomed() ? 1 : this.clickZoom);
  }

  // Rueda del mouse: acerca (scroll up) / aleja (scroll down) gradualmente.
  onWheel(event: WheelEvent): void {
    event.preventDefault();
    const dir = event.deltaY < 0 ? 1 : -1;
    const next = this.zoomLevel() + dir * this.wheelStep;
    this.zoomLevel.set(Math.min(this.maxZoom, Math.max(this.minZoom, next)));
  }

  // Al salir de la imagen, vuelve al tamaño normal.
  onLeave(): void {
    this.resetZoom();
  }

  // Al cargar cada imagen, centra el scroll horizontal (útil en mobile, donde
  // la imagen es más ancha que el visor). En desktop no hay overflow → queda en 0.
  centerScroll(event: Event): void {
    const stage = (event.target as HTMLElement).parentElement;
    if (!stage) return;
    requestAnimationFrame(() => {
      stage.scrollLeft = (stage.scrollWidth - stage.clientWidth) / 2;
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
