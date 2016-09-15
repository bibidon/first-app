import { Component } from '@angular/core';
import { LifecycleComponent } from './lifecycle.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [LifecycleComponent]
})
export class AppComponent {
  title = 'app works!';

  delete = false;
  test = 'Starting value';
  boundValue = 1000;
}
