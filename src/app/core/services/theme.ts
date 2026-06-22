import { Injectable, effect, signal } from '@angular/core';

export type ThemeMode = 'dark' | 'light';

const STORAGE_KEY = 'theme';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  readonly mode = signal<ThemeMode>(this.readInitial());

  constructor() {
    effect(() => {
      const mode = this.mode();
      document.documentElement.setAttribute('data-theme', mode);
      try {
        localStorage.setItem(STORAGE_KEY, mode);
      } catch {
        // localStorage no disponible (modo privado / SSR): se ignora.
      }
    });
  }

  toggle(): void {
    this.mode.update(m => (m === 'dark' ? 'light' : 'dark'));
  }

  set(mode: ThemeMode): void {
    this.mode.set(mode);
  }

  private readInitial(): ThemeMode {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    } catch {
      // se ignora
    }
    return 'dark';
  }
}
