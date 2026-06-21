import { Component, computed, inject } from '@angular/core';
import { Translation } from '@app/core/services/translation';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly tr = inject(Translation);
  private readonly year = new Date().getFullYear();

  // Crédito de diseño (Figma Community) de Ricardo Quebrada R.
  protected readonly designAuthor = 'Ricardo Quebrada R.';
  protected readonly figmaUrl =
    'https://www.figma.com/design/0j4mdLvT2tUnB3h6m4iFI1/Portafolio-Profesional--Community-?node-id=196-729';

  readonly text = computed(() => `${this.tr.t('footer.text')} ${this.year}`);
}
