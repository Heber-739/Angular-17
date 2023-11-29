import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule,TitleComponent],
  template: `
   <app-title [title]= "currentFramework()" />
   <pre> {{frameworkAsSignal() | json}} </pre>
   <pre> {{frameworkAsProperty | json}} </pre>
   `,
})
export default class ChangeDetectionComponent {
  currentFramework = computed(()=>
  `Change detection - ${this.frameworkAsSignal().name}`)

  frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  })
  frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  }


  constructor(){
    setTimeout(()=>{


      this.frameworkAsSignal.update(pre => ({
        ...pre,
        name: 'React'
      }))

      console.log('listo')

    },3000)

  }

}
