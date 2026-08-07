// Page Object de la ruta Sobre Mí (/sobre-mi)
// Selectores verificados en la exploración (2026-08-07)

import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class SobreMiPage extends BasePage {
  get githubLink() {
    return this.page.locator('a[href*="github.com"]');
  }
  get linkedinLink() {
    return this.page.locator('a[href*="linkedin.com"]');
  }
  get instagramLink() {
    return this.page.locator('a[href*="instagram.com"]');
  }

  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto('/sobre-mi');
  }
}
