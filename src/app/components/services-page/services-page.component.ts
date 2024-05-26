import { Component } from '@angular/core';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
  MatCardTitleGroup,
} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatSlider } from '@angular/material/slider';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    CommonModule,
    MatCardTitleGroup,
    MatSlider,
    MatIconButton,
    MatIcon,
    MatDivider,
  ],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss',
})
export class ServicesPageComponent {}
