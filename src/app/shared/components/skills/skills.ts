import { Component, DestroyRef, ElementRef, afterNextRender, inject, signal, viewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Skill } from '@app/core/models/skill.interface';
import { SkillDetailDialog } from '../skill-detail-dialog/skill-detail-dialog';
import { Translation } from '@app/core/services/translation';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-skills',
  imports: [MatIconModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly tr = inject(Translation);
  private readonly dialog = inject(MatDialog);
  private readonly destroyRef = inject(DestroyRef);

  /** Contenedor con overflow-x: sobre él se calcula la visibilidad de las flechas. */
  private readonly tableWrap = viewChild<ElementRef<HTMLDivElement>>('tableWrap');

  /** Indican si la tabla desborda por izquierda/derecha (solo entonces se muestran las flechas). */
  protected readonly canScrollLeft = signal(false);
  protected readonly canScrollRight = signal(false);

  constructor() {
    afterNextRender(() => {
      const wrap = this.tableWrap()?.nativeElement;
      if (!wrap) {
        return;
      }
      const observer = new ResizeObserver(() => this.syncScroll());
      observer.observe(wrap);
      this.destroyRef.onDestroy(() => observer.disconnect());
      this.syncScroll();
    });
  }

  /** Recalcula la visibilidad de las flechas según la posición de scroll actual. */
  syncScroll(): void {
    const wrap = this.tableWrap()?.nativeElement;
    if (!wrap) {
      this.canScrollLeft.set(false);
      this.canScrollRight.set(false);
      return;
    }
    const { scrollLeft, scrollWidth, clientWidth } = wrap;
    this.canScrollLeft.set(scrollLeft > 4);
    this.canScrollRight.set(scrollLeft + clientWidth < scrollWidth - 4);
  }

  /** Desplaza la tabla horizontalmente una fracción del ancho visible. */
  scrollBy(direction: -1 | 1): void {
    const wrap = this.tableWrap()?.nativeElement;
    if (!wrap) {
      return;
    }
    const step = Math.max(wrap.clientWidth * 0.8, 320);
    wrap.scrollBy({ left: direction * step, behavior: 'smooth' });
  }

  /** Dataset unificado: skills del CV + tecnologías usadas en los proyectos publicados. */
  skills: Skill[] = [
    {
      name: 'HTML5',
      icon: 'icons/skills/frontend/html.svg',
      descKey: 'skills.item.html5.desc',
      stack: 'frontend',
    },
    {
      name: 'CSS3',
      icon: 'icons/skills/frontend/css3.svg',
      descKey: 'skills.item.css3.desc',
      stack: 'frontend',
    },
    {
      name: 'JavaScript',
      icon: 'icons/skills/frontend/javascript.svg',
      descKey: 'skills.item.javascript.desc',
      stack: 'frontend',
    },
    {
      name: 'Sass',
      icon: 'icons/skills/frontend/sass.svg',
      descKey: 'skills.item.sass.desc',
      stack: 'frontend',
    },
    {
      name: 'Angular',
      icon: 'icons/skills/frontend/angular.svg',
      descKey: 'skills.item.angular.desc',
      stack: 'frontend',
    },
    {
      name: 'TypeScript',
      icon: 'icons/skills/frontend/typescript.svg',
      descKey: 'skills.item.typescript.desc',
      stack: 'frontend',
    },
    {
      name: 'Ionic',
      icon: 'icons/skills/frontend/ionic.svg',
      descKey: 'skills.item.ionic.desc',
      stack: 'frontend',
    },
    {
      name: 'RxJS',
      icon: 'icons/skills/frontend/rxjs.svg',
      descKey: 'skills.item.rxjs.desc',
      stack: 'frontend',
    },
    {
      name: 'Angular Material',
      icon: 'icons/skills/frontend/angular-material.svg',
      descKey: 'skills.item.angularMaterial.desc',
      stack: 'frontend',
    },
    {
      name: 'C#',
      icon: 'icons/skills/backend/c-sharp.svg',
      descKey: 'skills.item.csharp.desc',
      stack: 'backend',
    },
    {
      name: 'Node.js',
      icon: 'icons/skills/backend/nodejs.svg',
      descKey: 'skills.item.nodejs.desc',
      stack: 'backend',
    },
    {
      name: 'Python',
      icon: 'icons/skills/backend/python.svg',
      descKey: 'skills.item.python.desc',
      stack: 'backend',
    },
    {
      name: '.NET',
      icon: 'icons/skills/backend/NET-core.svg',
      descKey: 'skills.item.dotnet.desc',
      stack: 'backend',
    },
    {
      name: 'MySQL',
      icon: 'icons/skills/backend/mySql.svg',
      descKey: 'skills.item.mysql.desc',
      stack: 'backend',
    },
    {
      name: 'PostgreSQL',
      icon: 'icons/skills/backend/postgresql.svg',
      descKey: 'skills.item.postgresql.desc',
      stack: 'backend',
    },
    {
      name: 'Postman',
      icon: 'icons/skills/backend/postman.svg',
      descKey: 'skills.item.postman.desc',
      stack: 'backend',
    },
    {
      name: 'NestJS',
      icon: 'icons/skills/backend/nestjs.svg',
      descKey: 'skills.item.nestjs.desc',
      stack: 'backend',
    },
    {
      name: 'Express',
      icon: 'icons/skills/backend/express.svg',
      descKey: 'skills.item.express.desc',
      stack: 'backend',
      monochrome: true,
    },
    {
      name: 'MongoDB',
      icon: 'icons/skills/backend/mongodb-icon-2.svg',
      descKey: 'skills.item.mongodb.desc',
      stack: 'backend',
    },
    {
      name: 'Zod',
      icon: 'icons/skills/backend/zod.svg',
      descKey: 'skills.item.zod.desc',
      stack: 'backend',
    },
    {
      name: 'JWT',
      icon: 'icons/skills/backend/jwt.svg',
      descKey: 'skills.item.jwt.desc',
      stack: 'backend',
      monochrome: true,
    },
    {
      name: 'TypeORM',
      icon: 'icons/skills/backend/typeorm.svg',
      descKey: 'skills.item.typeorm.desc',
      stack: 'backend',
    },
    {
      name: 'SQLite',
      icon: 'icons/skills/backend/sqlite.svg',
      descKey: 'skills.item.sqlite.desc',
      stack: 'backend',
    },
    {
      name: 'Git',
      icon: 'icons/skills/herramientas/git-icon.svg',
      descKey: 'skills.item.git.desc',
      stack: 'tools',
    },
    {
      name: 'GitHub',
      icon: 'icons/skills/herramientas/github-blanco.svg',
      descKey: 'skills.item.github.desc',
      stack: 'tools',
      monochrome: true,
    },
    {
      name: 'GitLab',
      icon: 'icons/skills/herramientas/gitlab.svg',
      descKey: 'skills.item.gitlab.desc',
      stack: 'tools',
    },
    {
      name: 'Jira',
      icon: 'icons/skills/herramientas/jira.svg',
      descKey: 'skills.item.jira.desc',
      stack: 'tools',
    },
    {
      name: 'Visual Studio Code',
      icon: 'icons/skills/herramientas/visual-studio-code.svg',
      descKey: 'skills.item.vscode.desc',
      stack: 'tools',
    },
    {
      name: 'Visual Studio',
      icon: 'icons/skills/herramientas/visual-studio-2013.svg',
      descKey: 'skills.item.visualstudio.desc',
      stack: 'tools',
    },
    {
      name: 'Android Studio',
      icon: 'icons/skills/herramientas/android-studio-icon.svg',
      descKey: 'skills.item.androidstudio.desc',
      stack: 'tools',
    },
    {
      name: 'Figma',
      icon: 'icons/skills/herramientas/figma-icon.svg',
      descKey: 'skills.item.figma.desc',
      stack: 'tools',
    },
    {
      name: 'Jenkins',
      icon: 'icons/skills/herramientas/jenkins.svg',
      descKey: 'skills.item.jenkins.desc',
      stack: 'tools',
    },
    {
      name: 'Azure DevOps',
      icon: 'icons/skills/herramientas/azure-devops.svg',
      descKey: 'skills.item.azureDevops.desc',
      stack: 'tools',
    },
    {
      name: 'Trello',
      icon: 'icons/skills/herramientas/trello.svg',
      descKey: 'skills.item.trello.desc',
      stack: 'tools',
    },
    {
      name: 'Miro',
      icon: 'icons/skills/herramientas/miro.svg',
      descKey: 'skills.item.miro.desc',
      stack: 'tools',
      monochrome: true,
    },
    {
      name: 'Puppeteer',
      icon: 'icons/skills/herramientas/puppeteer.svg',
      descKey: 'skills.item.puppeteer.desc',
      stack: 'tools',
    },
    {
      name: 'Vercel',
      icon: 'icons/skills/herramientas/vercel.svg',
      descKey: 'skills.item.vercel.desc',
      stack: 'tools',
      monochrome: true,
    },
    {
      name: 'Claude Code',
      icon: 'icons/skills/ia/claude.svg',
      descKey: 'skills.item.claudeCode.desc',
      stack: 'ia',
    },
    {
      name: 'GitHub Copilot',
      icon: 'icons/skills/ia/copilot.svg',
      descKey: 'skills.item.copilot.desc',
      stack: 'ia',
      monochrome: true,
    },
    {
      name: 'Cursor',
      icon: 'icons/skills/ia/cursor.svg',
      descKey: 'skills.item.cursor.desc',
      stack: 'ia',
      monochrome: true,
    },
    {
      name: 'Spec-Driven Development',
      icon: 'icons/skills/ia/spec-driven.svg',
      descKey: 'skills.item.specDriven.desc',
      stack: 'ia',
    },
    {
      name: 'BMAD Method',
      icon: 'icons/skills/ia/bmad.svg',
      descKey: 'skills.item.bmad.desc',
      stack: 'ia',
    },
    {
      name: 'Groq',
      icon: 'icons/skills/ia/groq.svg',
      descKey: 'skills.item.groq.desc',
      stack: 'ia',
      fullColor: true,
    },
  ];

  /** Pintado por CSS (mask) para los íconos IA y los logos monocromáticos.
   *  Los logos full-color con fondo propio se excluyen y se renderizan como `<img>`. */
  isTinted(skill: Skill): boolean {
    return !skill.fullColor && (skill.stack === 'ia' || !!skill.monochrome);
  }

  glyphUrl(skill: Skill): string {
    return `url(${skill.icon})`;
  }

  tint(skill: Skill): string {
    if (skill.name === 'Claude Code') return '#d97757';
    if (skill.monochrome) return 'var(--text-primary)';
    if (skill.stack === 'ia') return '#e8833a';
    return 'var(--text-primary)';
  }

  openSkillModal(skill: Skill): void {
    this.dialog.open(SkillDetailDialog, {
      data: { skill },
      panelClass: 'skill-detail-dialog-panel',
      backdropClass: 'skill-detail-dialog-backdrop',
      maxWidth: '95vw',
    });
  }
}
