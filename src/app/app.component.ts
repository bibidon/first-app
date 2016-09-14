import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    Hello World!
    <app-other></app-other>
  `
  //templateUrl: 'app.component.html',
  //styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
