import { Component } from '@angular/core';

@Component({
  selector: 'inni-hello-world',
  template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
  projectTitle: string = 'test grid';
}
