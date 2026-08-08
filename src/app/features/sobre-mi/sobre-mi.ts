import { Component, inject } from '@angular/core';
import { Skills } from "@app/shared/components/skills/skills";
import { Translation } from '@app/core/services/translation';
import { Reveal } from '@app/shared/directives/reveal';
import { Certificados } from '@app/shared/components/certificados/certificados';

@Component({
  selector: 'app-sobre-mi',
  imports: [Skills, Reveal, Certificados],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.scss',
})
export class SobreMi {
  protected readonly tr = inject(Translation);
}
