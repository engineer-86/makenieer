import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListItem, MatNavList} from "@angular/material/list";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatSelect} from "@angular/material/select";
import {MatCard, MatCardHeader, MatCardImage} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {MatChip} from "@angular/material/chips";
import {MatTextColumn} from "@angular/material/table";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListItem,
    RouterLink,
    MatNavList,
    MatSelect,
    RouterOutlet,
    MatCardImage,
    NgOptimizedImage,
    MatCard,
    MatChip,
    MatCardHeader,
    MatTextColumn,
    MatTooltip,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  protected readonly MatCardImage = MatCardImage;
}
