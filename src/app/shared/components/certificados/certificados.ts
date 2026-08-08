import { Component, inject } from '@angular/core';
import { CERTIFICADOS } from '@app/core/data/certificados';
import { Translation } from '@app/core/services/translation';

@Component({
  selector: 'app-certificados',
  imports: [],
  templateUrl: './certificados.html',
  styleUrl: './certificados.scss',
})
export class Certificados {
  protected readonly tr = inject(Translation);
  protected readonly certificados = CERTIFICADOS;
}
