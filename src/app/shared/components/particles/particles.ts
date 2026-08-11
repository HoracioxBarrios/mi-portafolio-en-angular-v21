import { AfterViewInit, Component, ElementRef, OnDestroy, inject } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
  flicker: number;
}

@Component({
  selector: 'app-particles',
  imports: [],
  templateUrl: './particles.html',
  styleUrl: './particles.scss',
})
export class Particles implements AfterViewInit, OnDestroy {

  private readonly elementRef = inject(ElementRef);

  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private rafId = 0;
  private running = false;
  // Dimensiones del área visible en px CSS (el buffer del canvas usa px físicos con dpr).
  private width = 0;
  private height = 0;
  private accentColor = '#2196f3';
  private accentGlow = 'rgba(33, 150, 243, 0.35)';
  private themeObserver?: MutationObserver;
  private visibilityHandler = () => this.handleVisibility();

  // Cantidad y velocidad se reducen en móvil y con movimiento reducido.
  private readonly mobileMq = window.matchMedia('(max-width: 768px)');
  private readonly reducedMq = window.matchMedia('(prefers-reduced-motion: reduce)');

  ngAfterViewInit() {
    this.canvas = this.elementRef.nativeElement.querySelector('canvas')!;
    this.ctx = this.canvas.getContext('2d')!;
    this.readThemeColors();
    this.resize();
    window.addEventListener('resize', this.resizeHandler);
    document.addEventListener('visibilitychange', this.visibilityHandler);
    this.themeObserver = new MutationObserver(() => this.readThemeColors());
    this.themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    this.start();
  }

  ngOnDestroy() {
    this.stop();
    window.removeEventListener('resize', this.resizeHandler);
    document.removeEventListener('visibilitychange', this.visibilityHandler);
    this.themeObserver?.disconnect();
  }

  private readonly resizeHandler = () => this.resize();

  private resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = this.width * dpr;
    this.canvas.height = this.height * dpr;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.spawn();
  }

  private readThemeColors() {
    const style = getComputedStyle(document.documentElement);
    this.accentColor = style.getPropertyValue('--accent').trim() || '#2196f3';
    this.accentGlow = style.getPropertyValue('--accent-glow').trim() || 'rgba(33, 150, 243, 0.35)';
  }

  private spawn() {
    const count = this.reducedMq.matches ? 0 : (this.mobileMq.matches ? 20 : 50);
    this.particles = Array.from({ length: count }, () => this.createParticle());
  }

  private createParticle(): Particle {
    return {
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      r: 2 + Math.random() * 2,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: 0.2 + Math.random() * 0.5,
      flicker: Math.random() * 0.02 + 0.005,
    };
  }

  private start() {
    if (this.running) return;
    this.running = true;
    this.loop();
  }

  private stop() {
    this.running = false;
    cancelAnimationFrame(this.rafId);
  }

  private loop() {
    if (!this.running) return;
    this.update();
    this.draw();
    this.rafId = requestAnimationFrame(() => this.loop());
  }

  private handleVisibility() {
    if (document.hidden) {
      this.stop();
    } else {
      this.start();
    }
  }

  private update() {
    const w = this.width;
    const h = this.height;
    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) {
        p.vx *= -1;
        p.x = Math.min(w, Math.max(0, p.x));
      }
      if (p.y < 0 || p.y > h) {
        p.vy *= -1;
        p.y = Math.min(h, Math.max(0, p.y));
      }
      p.alpha += Math.sin(Date.now() * p.flicker) * 0.01;
      p.alpha = Math.max(0.1, Math.min(0.9, p.alpha));
    }
  }

  private draw() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (const p of this.particles) {
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      this.ctx.fillStyle = this.accentColor;
      this.ctx.globalAlpha = p.alpha;
      // Glow suave vía sombra (barato y sin líneas de conexión).
      this.ctx.shadowColor = this.accentGlow;
      this.ctx.shadowBlur = 8;
      this.ctx.fill();
    }
    this.ctx.shadowBlur = 0;
    this.ctx.globalAlpha = 1;
  }
}
