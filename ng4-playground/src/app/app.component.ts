import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hey from inline templating!</h1>
    <p>Another line in this template</p>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
