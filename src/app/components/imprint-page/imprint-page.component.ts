import { Component } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import {
  MatCardModule,
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
} from '@angular/material/card';
import { MatList, MatListItem } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-imprint-page',
  standalone: true,
  imports: [
    MatDivider,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatCardContent,
    MatListItem,
    MatList,
    MatIcon,
  ],
  templateUrl: './imprint-page.component.html',
  styleUrl: './imprint-page.component.scss',
})
export class ImprintPageComponent {}
