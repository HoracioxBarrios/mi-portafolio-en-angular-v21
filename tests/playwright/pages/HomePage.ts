// Page Object de la ruta Home (/home)
// Selectores verificados en la exploración (2026-08-07)

import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  get heroHeading() {
    return this.byRole('heading', { name: 'Horacio Javier Barrios', exact: true });
  }
  get aboutLink() {
    return this.byRole('link', { name: 'Conóceme más' });
  }
  get projectsLink() {
    return this.byRole('link', { name: 'Ver mis proyectos' });
  }
  get allProjectsLink() {
    return this.byRole('link', { name: 'Ver todos los proyectos' });
  }
  get contactMail() {
    return this.page.locator('a[href^="mailto:"]');
  }
  get githubLink() {
    return this.page.locator('a[href*="github.com"]');
  }
  get linkedinLink() {
    return this.page.locator('a[href*="linkedin.com"]');
  }

  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto('/home');
  }
}
