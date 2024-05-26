import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardFooter,
  MatCardTitle,
} from '@angular/material/card';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatTextColumn } from '@angular/material/table';
import { MatDialogContent } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatIcon,
    MatCardContent,
    MatCard,
    MatCardActions,
    MatCardFooter,
    MatButton,
    MatIconButton,
    RouterLink,
    MatTextColumn,
    MatAnchor,
    MatDialogContent,
    MatDivider,
    MatCardTitle,
    NgIf,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  animations: [],
})
export class HomePageComponent {
  showContent = true;
  ngOnInit() {
    setTimeout(() => {
      this.showContent = true;
    }, 2000);
  }

  protected readonly Component = Component;
}
