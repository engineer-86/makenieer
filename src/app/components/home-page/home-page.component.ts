import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatCard, MatCardActions, MatCardContent, MatCardFooter} from "@angular/material/card";
import {MatAnchor, MatButton, MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatTextColumn} from "@angular/material/table";
import {MatDialogContent} from "@angular/material/dialog";
import {MatDivider} from "@angular/material/divider";

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
    MatDivider
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  protected readonly Component = Component;
}
