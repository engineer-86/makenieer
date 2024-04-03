import {Component} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle,
    CommonModule
  ],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {
  services = [
    { title: 'Serverlösungen', description: 'Zuverlässige und skalierbare Serverlösungen für Ihr Unternehmen.' },
    { title: 'Netzwerkeinrichtung', description: 'Planung und Einrichtung Ihrer Netzwerkumgebungen.' },
    { title: 'Hardware-Beratung', description: 'Schnelle und effiziente Beratung für passgenaue Hardware.' },
    { title: 'Smart Home-Lösungen', description: 'Konzeption und Konfiguration intelligenter Smart-Home-Systeme.' }
  ];
}
