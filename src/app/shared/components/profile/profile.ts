import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RedSocial } from '@app/core/models/redSocial';
import { JoinTextPipe } from '@app/shared/pipes/join-text-pipe';

@Component({
  selector: 'app-profile',
  imports: [MatIconModule, JoinTextPipe],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile {

  @Input({ required: true }) fullName!: string;
  @Input({ required: true }) tecnologiasArr!: string[];
  @Input({ required: true }) location!: string;
  @Input({ required: true }) photo!: string;
  @Input() redesSociales: RedSocial[] = [];



}
