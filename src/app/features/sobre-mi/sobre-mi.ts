import { Component, inject } from '@angular/core';
import { Skills } from "@app/shared/components/skills/skills";
import { Translation } from '@app/core/services/translation';

@Component({
  selector: 'app-sobre-mi',
  imports: [Skills],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.scss',
})
export class SobreMi {
  protected readonly tr = inject(Translation);
}
