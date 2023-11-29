import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './sidemenu.component.html',
  styles: ``
})
export class SidemenuComponent {
  public sideRoutes:Route[] = routes.map(
    route => route.children ?? []
    ).flat().filter(route => route.path && !route.path.includes(':') )

}
