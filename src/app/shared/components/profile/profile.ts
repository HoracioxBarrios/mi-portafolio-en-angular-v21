import { Component, Input, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RedSocial } from '@app/core/models/redSocial';
import { JoinTextPipe } from '@app/shared/pipes/join-text-pipe';
import { Reveal } from '@app/shared/directives/reveal';
import { Translation } from '@app/core/services/translation';

@Component({
  selector: 'app-profile',
  imports: [MatIconModule, JoinTextPipe, Reveal],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {

  protected readonly tr = inject(Translation);

  @Input({ required: true }) fullName!: string;
  @Input({ required: true }) tecnologiasArr!: string[];
  @Input({ required: true }) location!: string;
  @Input({ required: true }) photo!: string;
  @Input() redesSociales: RedSocial[] = [];



}
