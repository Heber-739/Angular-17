import { Component, inject, signal, computed, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/users.interface';
import { UsersService } from '@services/users.service';
import { switchMap, tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule,TitleComponent],
  template: `
  <app-title [title]="titleLabel()" />

  @if (user()) {
<section>
<img [srcset]="user()?.avatar">
<div>
  <h3> {{user()?.first_name}} - {{user()?.last_name}} </h3>
  <p>{{user()?.email}}</p>
</div>

</section>
  }@else {
<p>Cargando informacion</p>
  }

  `,
})
export default class UserComponent {

  private route:ActivatedRoute = inject(ActivatedRoute);
  private userS:UsersService = inject(UsersService);

  user = toSignal(
    this.route.params.pipe(
      switchMap(({id})=> this.userS.getUserById(id))
    )
  )

  titleLabel = computed(()=> {
    if(this.user()){
      return `Información del usuario: ${this.user()?.first_name} - ${this.user()?.last_name}`
    } else {
      return `Información del usuario`
    }
  } )


}
