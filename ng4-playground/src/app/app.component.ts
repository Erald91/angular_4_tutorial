import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hey from inline templating!</h1>
    <!-- Interpolation -->
    <p>Interpolation[Display 'age' property]: {{ sampleObject.age }}</p>
    <!-- *ngFor structural directive -->
    <ul>
      <li *ngFor="let item of sampleArray">{{ item }}</li>
    </ul>
    <!-- *ngIf structural directive; else usage -->
    <p *ngIf="sampleBoolean; then yesTmpl else noTmpl"></p>
    <ng-template #yesTmpl>Variable sampleBoolean it's true</ng-template>
    <ng-template #noTmpl>Variable sampleBoolean it's false</ng-template>
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
  sampleBoolean = false;
}
