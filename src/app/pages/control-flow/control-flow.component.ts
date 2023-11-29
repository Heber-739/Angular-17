import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';


type Grade = 'A'|'B'|'F'
@Component({
  standalone: true,
  imports: [CommonModule,TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  showContent = signal(false);
  grade = signal<Grade>('A');
  frames = signal<string[]>(['Angular','Vue','Svelte','Qwik','React']);

  frames2 = signal<string[]>([]);

  toggle(){
    this.showContent.update(value => !value)
  }
change(val:Grade){
  this.grade.update(value => val)
}
addItem(val:string){
  this.frames2.update(value => [...value,val] )
}




}
