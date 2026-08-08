// Tests E2E del cambio "cambio-acento-azul".
// Valida la identidad de acento azul Material (#2196f3 dark / #1769c4 light)
// en links, botones primarios, tags, indicadores y CTA reservado, la coherencia
// al alternar tema, el contraste WCAG AA y la ausencia de restos lime/verde.
// Basado en openspec/changes/cambio-acento-azul/specs/diseno-visual/spec.md
// y openspec/changes/cambio-acento-azul/specs/playwright/test-plan.md

import { test, expect } from '@playwright/test';
import type { Page } from '@playwright/test';

// ──────────────────────────────────────────────
// Constantes de color
// ──────────────────────────────────────────────

// Los tokens CSS (--accent, --cta-bg, ...) se leen como hex (#2196f3).
// Los colores computados (getComputedStyle) se leen como rgb/rgba.
const AZUL_DARK_HEX = '#2196f3';
const AZUL_STRONG_DARK_HEX = '#1e88e5';
const CTA_TEXT_DARK_HEX = '#0b0f0d';
const AZUL_LIGHT_HEX = '#1769c4';
const AZUL_STRONG_LIGHT_HEX = '#115293';
const CTA_TEXT_LIGHT_HEX = '#ffffff';

const AZUL_DARK = 'rgb(33, 150, 243)';
const AZUL_STRONG_DARK = 'rgb(30, 136, 229)';
const CTA_TEXT_DARK = 'rgb(11, 15, 13)';
const AZUL_LIGHT = 'rgb(23, 105, 196)';
const AZUL_STRONG_LIGHT = 'rgb(17, 82, 147)';
const CTA_TEXT_LIGHT = 'rgb(255, 255, 255)';

// Valores de la palette lime/charteuse sustituida (restos prohibidos).
const LIME_RGB: Array<[number, number, number]> = [
  [190, 242, 100], // #bef264 (dark accent)
  [163, 230, 53], // #a3e635 (dark accent-strong)
  [217, 249, 157], // #d9f99d (dark cta-hover)
  [77, 124, 15], // #4d7c0f (light accent/cta)
  [63, 98, 18], // #3f6212 (light accent-strong/cta-hover)
  [101, 163, 13], // #65a30d (light soft-bg)
];

// Selectores con acento verificados en app-exploration.md
const SELECTORES_ACENTO = [
  '.header__brand',
  '.header__nav-link.is-active',
  '.btn--primary',
  '.project-card__action--primary',
  '.project-card__tag',
  '.sticky-cta',
  '.modal__nav',
  '.modal__tag',
  '.skill-dialog__stack',
  '.figma-modal__dot.is-active',
];

// ──────────────────────────────────────────────
// Helpers
// ──────────────────────────────────────────────

function rgbNormalizado(valor: string): [number, number, number] {
  const hex = valor.trim().match(/^#([0-9a-fA-F]{6})$/);
  if (hex) {
    const n = parseInt(hex[1], 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  const m = valor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) throw new Error(`Color no parseable: ${valor}`);
  return [Number(m[1]), Number(m[2]), Number(m[3])];
}

function esLime(rgb: [number, number, number]): boolean {
  return LIME_RGB.some(
    (l) => Math.abs(l[0] - rgb[0]) <= 1 && Math.abs(l[1] - rgb[1]) <= 1 && Math.abs(l[2] - rgb[2]) <= 1
  );
}

function luminancia(rgb: [number, number, number]): number {
  const [r, g, b] = rgb.map((v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function ratioContraste(a: [number, number, number], b: [number, number, number]): number {
  const l1 = luminancia(a);
  const l2 = luminancia(b);
  const mayor = Math.max(l1, l2);
  const menor = Math.min(l1, l2);
  return (mayor + 0.05) / (menor + 0.05);
}

async function colorDe(page: Page, selector: string, propiedad: string): Promise<string> {
  const valor = await page.evaluate(
    ({ sel, prop }) => {
      const el = document.querySelector(sel);
      return el ? getComputedStyle(el).getPropertyValue(prop).trim() : null;
    },
    { sel: selector, prop: propiedad }
  );
  if (valor === null) throw new Error(`Elemento no encontrado: ${selector}`);
  return valor;
}

async function tokenDe(page: Page, nombre: string): Promise<string> {
  const valor = await page.evaluate(
    (t) => getComputedStyle(document.documentElement).getPropertyValue(t).trim(),
    nombre
  );
  if (!valor) throw new Error(`Token no encontrado: ${nombre}`);
  return valor;
}

async function temaActual(page: Page): Promise<string> {
  return page.evaluate(() => document.documentElement.getAttribute('data-theme') || 'dark');
}

async function alternarTema(page: Page): Promise<void> {
  await page.locator('.header__icon-btn').click();
  await page.waitForTimeout(300);
}

// ──────────────────────────────────────────────
// Escenario 1: acento azul en tema oscuro por defecto
// ──────────────────────────────────────────────

test.describe('Acento azul en tema oscuro por defecto', () => {
  test('la app carga en dark con tokens de acento azul', async ({ page }) => {
    await page.goto('/home');
    await expect(page.getByRole('heading', { name: /Hola/i })).toBeVisible();

    expect(await temaActual(page)).toBe('dark');
    expect(await tokenDe(page, '--accent')).toBe(AZUL_DARK_HEX);
    expect(await tokenDe(page, '--accent-strong')).toBe(AZUL_STRONG_DARK_HEX);
    expect(await tokenDe(page, '--cta-bg')).toBe(AZUL_DARK_HEX);
    expect(await tokenDe(page, '--cta-text')).toBe(CTA_TEXT_DARK_HEX);
  });

  test('nav activo y marca usan azul (no lime)', async ({ page }) => {
    await page.goto('/home');
    await expect(page.locator('.header__brand')).toBeVisible();

    const marca = await colorDe(page, '.header__brand', 'color');
    expect(marca).toBe(AZUL_STRONG_DARK);

    await expect
      .poll(async () => colorDe(page, '.header__nav-link.is-active', 'color'))
      .toBe(AZUL_DARK);

    const navActivo = await colorDe(page, '.header__nav-link.is-active', 'color');
    expect(esLime(rgbNormalizado(marca))).toBe(false);
    expect(esLime(rgbNormalizado(navActivo))).toBe(false);
  });

  test('tags de proyectos usan acento azul suave', async ({ page }) => {
    await page.goto('/proyectos');
    await expect(page.locator('.project-card__tag').first()).toBeVisible();

    const tagBg = await colorDe(page, '.project-card__tag', 'background-color');
    const tagColor = await colorDe(page, '.project-card__tag', 'color');
    expect(tagBg).toBe('rgba(33, 150, 243, 0.1)');
    expect(tagColor).toBe(AZUL_STRONG_DARK);
  });
});

// ──────────────────────────────────────────────
// Escenario 2: coherencia al alternar tema
// ──────────────────────────────────────────────

test.describe('Acento coherente al alternar tema', () => {
  test('el acento conserva identidad azul en light y vuelve en dark', async ({ page }) => {
    await page.goto('/home');
    await expect(page.locator('.header__icon-btn')).toBeVisible();

    // Dark → light
    await alternarTema(page);
    expect(await temaActual(page)).toBe('light');
    expect(await tokenDe(page, '--accent')).toBe(AZUL_LIGHT_HEX);
    expect(await tokenDe(page, '--accent-strong')).toBe(AZUL_STRONG_LIGHT_HEX);
    expect(await tokenDe(page, '--cta-bg')).toBe(AZUL_LIGHT_HEX);
    expect(await tokenDe(page, '--cta-text')).toBe(CTA_TEXT_LIGHT_HEX);

    // Tags en light: familia azul legible
    await page.goto('/proyectos');
    await expect(page.locator('.project-card__tag').first()).toBeVisible();
    const tagBgLight = await colorDe(page, '.project-card__tag', 'background-color');
    const tagColorLight = await colorDe(page, '.project-card__tag', 'color');
    expect(tagBgLight).toBe('rgba(23, 105, 196, 0.1)');
    expect(tagColorLight).toBe(AZUL_STRONG_LIGHT);

    // Light → dark: vuelve la identidad azul original
    await page.goto('/home');
    await alternarTema(page);
    expect(await temaActual(page)).toBe('dark');
    expect(await tokenDe(page, '--accent')).toBe(AZUL_DARK_HEX);
    expect(await tokenDe(page, '--accent-strong')).toBe(AZUL_STRONG_DARK_HEX);
  });
});

// ──────────────────────────────────────────────
// Escenario 3: CTA reservado con acento pleno
// ──────────────────────────────────────────────

test.describe('CTA reservado con acento pleno azul', () => {
  test('CTA de hero usa acento pleno y texto de contraste', async ({ page }) => {
    await page.goto('/home');
    const cta = page.getByRole('link', { name: /Escribime/i });
    await expect(cta).toBeVisible();

    const bg = await colorDe(page, '.btn--primary', 'background-color');
    const texto = await colorDe(page, '.btn--primary', 'color');
    expect(bg).toBe(AZUL_DARK);
    expect(texto).toBe(CTA_TEXT_DARK);
  });

  test('CTA de card de proyecto usa acento pleno', async ({ page }) => {
    await page.goto('/proyectos');
    await expect(page.locator('.project-card__action--primary').first()).toBeVisible();

    const bg = await colorDe(page, '.project-card__action--primary', 'background-color');
    const texto = await colorDe(page, '.project-card__action--primary', 'color');
    expect(bg).toBe(AZUL_DARK);
    expect(texto).toBe(CTA_TEXT_DARK);
  });

  test('sticky CTA en móvil usa acento pleno tras scroll', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/home');
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);

    const sticky = page.locator('.sticky-cta');
    await expect(sticky).toBeVisible();
    const bg = await colorDe(page, '.sticky-cta', 'background-color');
    const texto = await colorDe(page, '.sticky-cta', 'color');
    expect(bg).toBe(AZUL_DARK);
    expect(texto).toBe(CTA_TEXT_DARK);
  });
});

// ──────────────────────────────────────────────
// Escenario 4: contraste AA en ambos temas
// ──────────────────────────────────────────────

test.describe('Contraste WCAG AA del acento', () => {
  const AA_MIN = 4.5;

  test('texto de acento cumple AA en dark', async ({ page }) => {
    await page.goto('/home');
    const fondoDark = rgbNormalizado(await tokenDe(page, '--bg-primary'));

    expect(ratioContraste(rgbNormalizado(AZUL_DARK), fondoDark)).toBeGreaterThanOrEqual(AA_MIN);
    expect(ratioContraste(rgbNormalizado(AZUL_STRONG_DARK), fondoDark)).toBeGreaterThanOrEqual(AA_MIN);
    expect(ratioContraste(rgbNormalizado(CTA_TEXT_DARK), rgbNormalizado(AZUL_DARK))).toBeGreaterThanOrEqual(AA_MIN);
  });

  test('texto de acento cumple AA en light', async ({ page }) => {
    await page.goto('/home');
    await alternarTema(page);
    expect(await temaActual(page)).toBe('light');
    const fondoLight = rgbNormalizado(await tokenDe(page, '--bg-primary'));

    expect(ratioContraste(rgbNormalizado(AZUL_LIGHT), fondoLight)).toBeGreaterThanOrEqual(AA_MIN);
    expect(ratioContraste(rgbNormalizado(AZUL_STRONG_LIGHT), fondoLight)).toBeGreaterThanOrEqual(AA_MIN);
    expect(ratioContraste(rgbNormalizado(CTA_TEXT_LIGHT), rgbNormalizado(AZUL_LIGHT))).toBeGreaterThanOrEqual(AA_MIN);
  });
});

// ──────────────────────────────────────────────
// Escenario 5: componentes Material sin destaque verde
// ──────────────────────────────────────────────

test.describe('Componentes sin restos lime/verde', () => {
  test('ningún elemento visible usa colores de la palette lime sustituida', async ({ page }) => {
    await page.goto('/home');
    await expect(page.locator('.header__brand')).toBeVisible();

    const restos = await page.evaluate((selectores) => {
      const prohibidos: Array<[number, number, number]> = [
        [190, 242, 100], [163, 230, 53], [217, 249, 157],
        [77, 124, 15], [63, 98, 18], [101, 163, 13],
      ];
      const esLime = (rgb: string): boolean => {
        const m = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (!m) return false;
        const r = Number(m[1]);
        const g = Number(m[2]);
        const b = Number(m[3]);
        return prohibidos.some(
          (l) => Math.abs(l[0] - r) <= 1 && Math.abs(l[1] - g) <= 1 && Math.abs(l[2] - b) <= 1
        );
      };
      const encontrados: string[] = [];
      const blancos = selectores.join(',');
      document.querySelectorAll(blancos).forEach((el) => {
        const cs = getComputedStyle(el);
        ['color', 'background-color', 'border-top-color'].forEach((prop) => {
          const v = cs.getPropertyValue(prop);
          if (v && esLime(v)) encontrados.push(`${el.className} [${prop}=${v}]`);
        });
      });
      return encontrados;
    }, SELECTORES_ACENTO);

    expect(restos).toEqual([]);
  });

  test('dialog de proyecto renderiza sin acentos lime', async ({ page }) => {
    await page.goto('/proyectos');
    const botonMas = page.getByRole('button', { name: /Ver más/i }).first();
    await expect(botonMas).toBeVisible();
    await botonMas.click();

    const dialog = page.locator('.project-detail-modal');
    await expect(dialog).toBeVisible();

    const restos = await dialog.evaluate((el) => {
      const prohibidos: Array<[number, number, number]> = [
        [190, 242, 100], [163, 230, 53], [217, 249, 157],
        [77, 124, 15], [63, 98, 18], [101, 163, 13],
      ];
      const esLime = (rgb: string): boolean => {
        const m = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (!m) return false;
        const r = Number(m[1]);
        const g = Number(m[2]);
        const b = Number(m[3]);
        return prohibidos.some(
          (l) => Math.abs(l[0] - r) <= 1 && Math.abs(l[1] - g) <= 1 && Math.abs(l[2] - b) <= 1
        );
      };
      const encontrados: string[] = [];
      el.querySelectorAll('*').forEach((n) => {
        const cs = getComputedStyle(n);
        ['color', 'background-color'].forEach((prop) => {
          const v = cs.getPropertyValue(prop);
          if (v && esLime(v)) encontrados.push(`${n.tagName}.${n.className} [${prop}=${v}]`);
        });
      });
      return encontrados;
    });

    expect(restos).toEqual([]);
  });
});
