import { Component } from '@angular/core';
import {MatDivider} from "@angular/material/divider";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-imprint-page',
  standalone: true,
  imports: [
    MatDivider,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatCardContent
  ],
  templateUrl: './imprint-page.component.html',
  styleUrl: './imprint-page.component.scss'
})
export class ImprintPageComponent {

}
