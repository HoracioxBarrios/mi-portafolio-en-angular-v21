// Page Object de la ruta Proyectos (/proyectos)
// Selectores verificados en la exploración (2026-08-07)

import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProyectosPage extends BasePage {
  get sectionHeading() {
    return this.byRole('heading', { name: 'Una selección de mi trabajo' });
  }
  get moreButtons() {
    return this.byRole('button', { name: 'Ver más...' });
  }
  get privateRepoButtons() {
    return this.page.getByRole('button', { name: 'Repositorio privado' });
  }

  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto('/proyectos');
  }

  async countVisibleProjects(): Promise<number> {
    return this.moreButtons.count();
  }
}
