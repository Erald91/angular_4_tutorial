import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

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
    <!-- Property binding -->
    <div>
      <img width="100" src="{{ angularLogoPath }}">
      <img width="100" [src]="angularLogoPath">
      <img width="100" bind-src="angularLogoPath">
    </div>
    <!-- Event binding -->
    <div>
      Button status controlled by property binding: <button [disabled]="isButtonDisabled" (click)="onButtonClick($event)">Button</button>
    </div>
    <!-- CSS handling -->
    <p 
      [style.color]="redColorValue" 
      [ngStyle]="redUnderlinedStyle" 
      [class.largeFont]="true" 
      [ngClass]="customPointerClasses">
        Hello World!
    </p>
    <!-- Data fetched from service -->
    <div>
      Content of array returned from service:
      <ul>
        <li *ngIf="fetchedData.length; then listItemTmpl else emptyItemTmpl"></li>
        <ng-template #listItemTmpl>
          <li *ngFor="let item of fetchedData">{{ item }}</li>
        </ng-template>
        <ng-template #emptyItemTmpl>
          <li>Data from service is empty or loading</li>
        </ng-template>
        </ul>
    </div>
    <!-- Add animation to template -->
    <p [@customAnimation]="state" (click)="triggerAnimation($event)" [class.animateParagraph]="true">Animated</p>
  `,
  styles: [`
    .largeFont {
      font-size: 25px !important;
    }
    .pointer {
      cursor: pointer;
    }
    .italic {
      font-style: italic;
    }
    .animateParagraph {
      width: 350px;
      margin: 50px auto;
      text-align: center;
      padding: 20px;
      font-size: 20px;
      background-color: grey;
      color: white
    }
  `],
  animations: [
    trigger('customAnimation', [
      state('small', style({
        transform: 'scale(1)'
      })),
      state('large', style({
        transform: 'scale(1.2)'
      })),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translate(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translate(35%)', offset: .5}),
        style({opacity: 1, transform: 'translate(0)', offset: 1})
      ])))
    ])
  ],
  // styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  sampleObject = {
    gender: 'male',
    age: 32,
    location: 'USA',
  }
  sampleArray = ['Foo', 'Bar', 'Foo'];
  sampleBoolean = false;
  angularLogoPath = 'https://angular.io/assets/images/logos/angular/angular.svg';
  isButtonDisabled = false;
  redColorValue = 'red';
  redUnderlinedStyle = {
    'color': 'red',
    'text-decoration': 'underline',
  }
  customPointerClasses = {
    pointer: true,
    italic: true,
  }
  fetchedData = [];
  state:string = 'small';


  constructor(private _dataService:DataService) { }

  ngOnInit() {
    this._dataService.returnSampleData().then(data => {
      this.fetchedData = data;
    })
  }

  onButtonClick(event) {
    console.log("Event", event);
  }

  triggerAnimation(event) {
    this.state = this.state === 'small' ? 'large' : 'small';
  }
}
