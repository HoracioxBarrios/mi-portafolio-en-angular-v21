import { Component, computed, inject } from '@angular/core';
import { Translation } from '@app/core/services/translation';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  private readonly tr = inject(Translation);
  private readonly year = new Date().getFullYear();

  readonly text = computed(() => `${this.tr.t('footer.text')} · © ${this.year}`);
}
