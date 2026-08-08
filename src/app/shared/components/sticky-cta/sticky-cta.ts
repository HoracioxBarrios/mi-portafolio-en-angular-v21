import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Translation } from '@app/core/services/translation';

/**
 * Sticky CTA de contacto solo en móvil: botón flotante en la esquina inferior.
 * Visible tras el primer scroll (~200px), oculto al volver arriba.
 */
@Component({
  selector: 'app-sticky-cta',
  imports: [],
  templateUrl: './sticky-cta.html',
  styleUrl: './sticky-cta.scss',
})
export class StickyCta {

  protected readonly tr = inject(Translation);
  protected readonly visible = signal(false);

  private readonly destroyRef = inject(DestroyRef);
  private readonly mobileMq = window.matchMedia('(max-width: 768px)');
  private readonly reducedMq = window.matchMedia('(prefers-reduced-motion: reduce)');

  constructor() {
    fromEvent(window, 'scroll', { passive: true })
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter(() => this.mobileMq.matches),
        map(() => window.scrollY)
      )
      .subscribe((scrollY) => {
        // Movimiento reducido: solo mostrar/ocultar, sin transición (el CSS lo resuelve).
        this.visible.set(scrollY > 200);
      });
  }
}
