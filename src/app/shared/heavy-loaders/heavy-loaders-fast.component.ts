import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section [ngClass]="[ 'w-full',cssClass ]">
<ng-content />

  </section>
  `,
})
export class HeavyLoadersFastComponent {


  @Input({required:true}) cssClass!:string;


  constructor(){
    console.log('heavy fast created')
  }
}