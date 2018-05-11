import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hey from inline templating!</h1>
    <p>Interpolation[Display 'age' property]: {{ sampleObject.age }}</p>
    <ul *ngFor="let item of sampleArray">
      <li>{{ item }}</li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  sampleObject = {
    gender: 'male',
    age: 32,
    location: 'USA',
  }
  sampleArray = ['Foo', 'Bar', 'Foo'];
}
