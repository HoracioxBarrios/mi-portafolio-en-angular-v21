import { Component, computed, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Translation } from '@app/core/services/translation';
import { FigmaInspirationDialog } from '../figma-inspiration-dialog/figma-inspiration-dialog';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  protected readonly tr = inject(Translation);
  private readonly dialog = inject(MatDialog);
  private readonly year = new Date().getFullYear();

  // Crédito de diseño (Figma Community) de Ricardo Quebrada R.
  protected readonly designAuthor = 'Ricardo Quebrada R.';

  readonly text = computed(() => `${this.tr.t('footer.text')} ${this.year}`);

  openFigmaInspiration(): void {
    this.dialog.open(FigmaInspirationDialog, {
      panelClass: 'figma-modal-panel',
      backdropClass: 'skill-detail-dialog-backdrop',
      width: '900px',
      maxWidth: '95vw',
    });
  }
}
