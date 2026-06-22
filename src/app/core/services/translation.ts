import { Injectable, effect, signal } from '@angular/core';
import { ES } from '../i18n/es';
import { EN } from '../i18n/en';

export type Lang = 'es' | 'en';

const DICTS: Record<Lang, Record<string, string>> = { es: ES, en: EN };
const STORAGE_KEY = 'lang';

@Injectable({
  providedIn: 'root',
})
export class Translation {
  readonly lang = signal<Lang>(this.readInitial());

  constructor() {
    effect(() => {
      const lang = this.lang();
      document.documentElement.setAttribute('lang', lang);
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // localStorage no disponible: se ignora.
      }
    });
  }

  /**
   * Traduce una clave al idioma activo. Lee el signal `lang` para que el
   * template se re-evalúe automáticamente al cambiar de idioma.
   */
  t(key: string): string {
    return DICTS[this.lang()][key] ?? key;
  }

  toggle(): void {
    this.lang.update(l => (l === 'es' ? 'en' : 'es'));
  }

  set(lang: Lang): void {
    this.lang.set(lang);
  }

  private readInitial(): Lang {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'es' || stored === 'en') {
        return stored;
      }
    } catch {
      // se ignora
    }
    return 'es';
  }
}
