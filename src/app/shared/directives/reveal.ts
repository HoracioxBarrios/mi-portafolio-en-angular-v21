import { Directive, ElementRef, inject, Input, OnDestroy, OnInit } from '@angular/core';

/**
 * Reveal al entrar en viewport: fade-in breve con desplazamiento vertical ≤16px.
 * Anima solo opacity/transform (sin CLS). Respeta prefers-reduced-motion.
 * Las clases .reveal-init / .is-revealed viven en styles.scss (global).
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class Reveal implements OnInit, OnDestroy {

  private readonly elementRef = inject(ElementRef<HTMLElement>);

  /** Retraso extra (ms) además del stagger automático entre hermanos. */
  @Input() revealDelay = 0;

  private observer?: IntersectionObserver;
  private readonly reducedMq = window.matchMedia('(prefers-reduced-motion: reduce)');
  private readonly reducedHandler = () => this.applyReduced();

  ngOnInit() {
    const el = this.elementRef.nativeElement;
    el.classList.add('reveal-init');

    if (this.reducedMq.matches) {
      el.classList.add('is-revealed');
      return;
    }

    this.reducedMq.addEventListener('change', this.reducedHandler);
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const parent = el.parentElement;
          const siblings: Element[] = parent ? Array.from(parent.children) : [];
          const index = siblings.indexOf(el);
          el.style.transitionDelay = `${this.revealDelay + index * 80}ms`;
          el.classList.add('is-revealed');
          this.observer?.disconnect();
          this.observer = undefined;
        }
      },
      { threshold: 0.12 }
    );
    this.observer.observe(el);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
    this.reducedMq.removeEventListener('change', this.reducedHandler);
  }

  private applyReduced() {
    if (!this.reducedMq.matches) return;
    const el = this.elementRef.nativeElement;
    el.classList.add('is-revealed');
    el.style.transition = 'none';
    this.observer?.disconnect();
    this.observer = undefined;
  }
}
